import { Resend } from 'resend';

export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailOptions) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn('[Resend] RESEND_API_KEY environment variable is not configured. Email logged to console.');
      console.log(`[Email Dispatch] To: ${to} | Subject: ${subject}`);
      return { success: true, messageId: 'simulated-id' };
    }

    const resendClient = new Resend(apiKey);
    const fromAddress = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const clinicEmail = process.env.CLINIC_NOTIFICATION_EMAIL || 'adityabusinesslab@gmail.com';
    const registeredAccountOwner = 'shrivastavaabhinav046@gmail.com';

    let response = await resendClient.emails.send({
      from: `ÉLITE Dental Clinic <${fromAddress}>`,
      to,
      subject,
      html,
    });

    // If Resend blocks sending to unverified recipient due to free testing tier restrictions (403 error)
    if (response.error && response.error.name === 'validation_error' && to !== registeredAccountOwner) {
      console.warn(`[Resend Testing Mode] Unverified recipient ${to}. Forwarding copy to registered owner ${registeredAccountOwner}.`);
      
      const fallbackResponse = await resendClient.emails.send({
        from: `ÉLITE Dental Clinic <${fromAddress}>`,
        to: registeredAccountOwner,
        subject: `[Notification for ${to}] ${subject}`,
        html: `
          <div style="background:#fef3c7; padding:12px; border-radius:6px; margin-bottom:16px; font-size:12px; color:#92400e; border:1px solid #fde68a;">
            ⚠️ <strong>Resend Testing Domain Notice:</strong> This notification was addressed to <strong>${to}</strong>. 
            To send directly to this address in production, add your domain at <a href="https://resend.com/domains" target="_blank">resend.com/domains</a>.
          </div>
          ${html}
        `,
      });

      return { success: true, data: fallbackResponse, redirected: true };
    }

    if (response.error) {
      console.error('[Resend API Error]', response.error);
      return { success: false, error: response.error.message };
    }

    console.log(`[Resend Success] Email sent to ${to}. ID:`, response.data?.id);
    return { success: true, data: response };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown email dispatch error';
    console.error('[Resend Exception]', message);
    return { success: false, error: message };
  }
}
