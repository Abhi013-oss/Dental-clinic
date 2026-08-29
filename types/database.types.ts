export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      appointments: {
        Row: {
          id: string;
          patient_name: string;
          country_code: string | null;
          phone: string;
          email: string;
          age: string | null;
          gender: string | null;
          treatment: string;
          preferred_doctor: string | null;
          appointment_date: string;
          appointment_time: string;
          reason_for_visit: string | null;
          additional_notes: string | null;
          status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled' | 'Rejected';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          patient_name: string;
          country_code?: string | null;
          phone: string;
          email: string;
          age?: string | null;
          gender?: string | null;
          treatment: string;
          preferred_doctor?: string | null;
          appointment_date: string;
          appointment_time: string;
          reason_for_visit?: string | null;
          additional_notes?: string | null;
          status?: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled' | 'Rejected';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          patient_name?: string;
          country_code?: string | null;
          phone?: string;
          email?: string;
          age?: string | null;
          gender?: string | null;
          treatment?: string;
          preferred_doctor?: string | null;
          appointment_date?: string;
          appointment_time?: string;
          reason_for_visit?: string | null;
          additional_notes?: string | null;
          status?: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled' | 'Rejected';
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  errors?: Record<string, string>;
}
