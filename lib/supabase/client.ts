import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/database.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yftudklziamoxyjeeytd.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_iYWpzhB7AdCfWF_ysA83GA_Afp-p2C9';

export const isSupabaseConfigured = () => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl !== 'https://your-supabase-project-id.supabase.co'
  );
};

export const supabaseClient = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey
);
