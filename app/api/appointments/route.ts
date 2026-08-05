import { NextRequest, NextResponse } from 'next/server';
import { simpleBookingSchema } from '@/types/booking.types';
import { createAppointmentInDb } from '@/lib/services/appointment.service';
import { sanitizeInput } from '@/lib/sanitize';
import { logBackendEvent } from '@/lib/logger';
import { sendEmail } from '@/lib/resend';
import { servicesData } from '@/constants/services.data';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validationResult = simpleBookingSchema.safeParse(body);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });

      logBackendEvent('warn', 'API:Appointments', 'Validation failure during appointment creation', { fieldErrors });

      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, email, phone, serviceId, preferredDate, preferredTimeSlot, doctorId, age, gender, reasonForVisit, notes } = validationResult.data;

    // Resolve service slug to clean human-readable title
    const serviceObj = servicesData.find((s) => s.id === serviceId || s.slug === serviceId);
    const serviceTitle = serviceObj ? serviceObj.title : serviceId;

    const sanitizedData = {
      patient_name: sanitizeInput(fullName),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      treatment: sanitizeInput(serviceTitle),
      appointment_date: sanitizeInput(preferredDate),
      appointment_time: sanitizeInput(preferredTimeSlot),
      preferred_doctor: doctorId ? sanitizeInput(doctorId) : 'First Available Specialist',
      age: age ? sanitizeInput(age) : null,
      gender: gender ? sanitizeInput(gender) : null,
      reason_for_visit: reasonForVisit ? sanitizeInput(reasonForVisit) : null,
      additional_notes: notes ? sanitizeInput(notes) : null,
    };

    const result = await createAppointmentInDb(sanitizedData);

    const bookingRef = result.data?.id ? `ELITE-${result.data.id.substring(0, 8).toUpperCase()}` : `ELITE-${Math.floor(100000 + Math.random() * 900000)}`;

    // 1. Send Luxury Confirmation Email to the Patient
    const patientHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Appointment Confirmation</title>
        </head>
        <body style="font-family: Arial, Helvetica, sans-serif; background-color: #f1f5f9; margin: 0; padding: 20px; -webkit-font-smoothing: antialiased;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px rgba(15,23,42,0.08);">
            <!-- Header -->
            <tr>
              <td style="background-color: #0f172a; padding: 32px 24px; text-align: center; border-bottom: 3px solid #0284c7;">
                <h1 style="color: #ffffff; font-size: 22px; font-weight: 800; letter-spacing: 2px; margin: 0; text-transform: uppercase;">ÉLITE DENTAL CLINIC</h1>
                <div style="color: #38bdf8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; margin-top: 6px;">Beverly Hills • Clinical Excellence</div>
              </td>
            </tr>
            <!-- Content -->
            <tr>
              <td style="padding: 32px 28px;">
                <div style="display: inline-block; background-color: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 11px; padding: 6px 14px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;">
                  ✓ Appointment Confirmed
                </div>
                <h2 style="color: #0f172a; font-size: 22px; font-weight: 800; margin: 0 0 10px 0;">Dear ${sanitizedData.patient_name},</h2>
                <p style="color: #64748b; font-size: 14px; line-height: 1.6; margin-top: 0; margin-bottom: 24px;">Your clinical consultation has been successfully reserved. Our concierge team is preparing your private suite.</p>
                
                <!-- Table Details -->
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 24px; overflow: hidden;">
                  <tr>
                    <td style="padding: 12px 16px; color: #64748b; font-size: 13px; font-weight: 600; border-bottom: 1px solid #e2e8f0; width: 40%;">Booking Reference:</td>
                    <td style="padding: 12px 16px; color: #0284c7; font-size: 13px; font-weight: 800; font-family: monospace; text-align: right; border-bottom: 1px solid #e2e8f0;">${bookingRef}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; color: #64748b; font-size: 13px; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Treatment Service:</td>
                    <td style="padding: 12px 16px; color: #0f172a; font-size: 13px; font-weight: 700; text-align: right; border-bottom: 1px solid #e2e8f0;">${sanitizedData.treatment}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; color: #64748b; font-size: 13px; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Reserved Date:</td>
                    <td style="padding: 12px 16px; color: #0f172a; font-size: 13px; font-weight: 700; text-align: right; border-bottom: 1px solid #e2e8f0;">${sanitizedData.appointment_date}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; color: #64748b; font-size: 13px; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Time Window:</td>
                    <td style="padding: 12px 16px; color: #059669; font-size: 13px; font-weight: 800; text-align: right; border-bottom: 1px solid #e2e8f0;">${sanitizedData.appointment_time}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 16px; color: #64748b; font-size: 13px; font-weight: 600;">Patient Phone:</td>
                    <td style="padding: 12px 16px; color: #0f172a; font-size: 13px; font-weight: 700; text-align: right;">${sanitizedData.phone}</td>
                  </tr>
                </table>

                <p style="color: #475569; font-size: 13px; line-height: 1.6; text-align: center; margin: 0 0 20px 0;">
                  Need to modify your appointment? Call reception directly at <strong style="color: #0f172a;">+1 (800) 888-ELITE</strong>.
                </p>

                <div style="text-align: center;">
                  <a href="tel:+18008883548" style="display: inline-block; background-color: #0284c7; color: #ffffff; font-weight: 700; font-size: 14px; text-decoration: none; padding: 14px 28px; border-radius: 10px; box-shadow: 0 4px 12px rgba(2,132,199,0.3);">Call Reception Desk</a>
                </div>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px; line-height: 1.5;">
                ÉLITE Dental Clinic & Atelier • 450 Beverly Hills Blvd, Suite 900, Beverly Hills, CA 90210<br/>
                © ${new Date().getFullYear()} ÉLITE Dental Atelier. All Rights Reserved.
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    sendEmail({
      to: sanitizedData.email,
      subject: `Appointment Confirmation (${bookingRef}) - ÉLITE Dental Clinic`,
      html: patientHtml,
    }).catch((err) => console.error('[Resend Patient Email Error]', err));

    // 2. Send Ultra-Luxury Doctor Notification Email
    const doctorEmail = process.env.CLINIC_NOTIFICATION_EMAIL || 'adityabusinesslab@gmail.com';
    const doctorHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Patient Reservation</title>
        </head>
        <body style="font-family: Arial, Helvetica, sans-serif; background-color: #f1f5f9; margin: 0; padding: 20px; -webkit-font-smoothing: antialiased;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 10px 25px rgba(15,23,42,0.08);">
            <!-- Header -->
            <tr>
              <td style="background-color: #0f172a; padding: 28px 24px; text-align: center; border-bottom: 4px solid #059669;">
                <h1 style="color: #ffffff; font-size: 20px; font-weight: 800; letter-spacing: 2px; margin: 0; text-transform: uppercase;">ÉLITE CLINICAL RECEPTION</h1>
                <div style="color: #34d399; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; margin-top: 6px;">New Patient Reservation Alert</div>
              </td>
            </tr>
            <!-- Content -->
            <tr>
              <td style="padding: 28px 24px;">
                <div style="margin-bottom: 20px;">
                  <span style="display: inline-block; background-color: #d1fae5; color: #047857; font-weight: 800; font-size: 11px; padding: 6px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px;">
                    ● Action Required: New Booking
                  </span>
                </div>

                <h3 style="color: #0f172a; font-size: 18px; font-weight: 800; margin: 0 0 16px 0;">Appointment Details:</h3>
                
                <!-- Table Details -->
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 12px; overflow: hidden;">
                  <tr>
                    <td style="padding: 14px 18px; color: #64748b; font-size: 13px; font-weight: 600; border-bottom: 1px solid #e2e8f0; width: 38%;">Patient Name:</td>
                    <td style="padding: 14px 18px; color: #0f172a; font-size: 14px; font-weight: 800; text-align: right; border-bottom: 1px solid #e2e8f0;">${sanitizedData.patient_name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 14px 18px; color: #64748b; font-size: 13px; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Email Address:</td>
                    <td style="padding: 14px 18px; color: #0284c7; font-size: 13px; font-weight: 700; text-align: right; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${sanitizedData.email}" style="color: #0284c7; text-decoration: none;">${sanitizedData.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 14px 18px; color: #64748b; font-size: 13px; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Phone Number:</td>
                    <td style="padding: 14px 18px; color: #0f172a; font-size: 14px; font-weight: 800; text-align: right; border-bottom: 1px solid #e2e8f0;"><a href="tel:${sanitizedData.phone}" style="color: #0f172a; text-decoration: none;">${sanitizedData.phone}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 14px 18px; color: #64748b; font-size: 13px; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Requested Treatment:</td>
                    <td style="padding: 14px 18px; color: #0284c7; font-size: 14px; font-weight: 800; text-align: right; border-bottom: 1px solid #e2e8f0;">${sanitizedData.treatment}</td>
                  </tr>
                  <tr>
                    <td style="padding: 14px 18px; color: #64748b; font-size: 13px; font-weight: 600; border-bottom: 1px solid #e2e8f0;">Appointment Date:</td>
                    <td style="padding: 14px 18px; color: #0f172a; font-size: 14px; font-weight: 800; text-align: right; border-bottom: 1px solid #e2e8f0;">${sanitizedData.appointment_date}</td>
                  </tr>
                  <tr>
                    <td style="padding: 14px 18px; color: #64748b; font-size: 13px; font-weight: 600;">Time Window:</td>
                    <td style="padding: 14px 18px; color: #059669; font-size: 14px; font-weight: 800; text-align: right;">${sanitizedData.appointment_time}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px; text-align: center; color: #94a3b8; font-size: 12px;">
                ÉLITE Dental Atelier • Automatic Clinical Notification System
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    sendEmail({
      to: doctorEmail,
      subject: `[New Patient] ${sanitizedData.patient_name} - ${sanitizedData.treatment} (${sanitizedData.appointment_date})`,
      html: doctorHtml,
    }).catch((err) => console.error('[Resend Doctor Email Error]', err));

    return NextResponse.json(
      {
        success: true,
        message: 'Appointment successfully created.',
        data: result.data,
        simulated: result.simulated,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    logBackendEvent('error', 'API:Appointments', 'Unhandled exception in POST /api/appointments', { message });

    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
