import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/database.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yftudklziamoxyjeeytd.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_iYWpzhB7AdCfWF_ysA83GA_Afp-p2C9';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAnonKey;

export const getSupabaseServerClient = (useServiceRole = false) => {
  const key = useServiceRole ? supabaseServiceKey : supabaseAnonKey;
  return createClient<Database>(
    supabaseUrl,
    key
  );
};
