import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

console.log(import.meta.env);

const supabase = createClient<Database>(import.meta.env.VITE_SUPABASE_API_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

export default supabase;

