import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ihvlvlzclvrroqbhldqk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlodmx2bHpjbHZycm9xYmhsZHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3NjEzODUsImV4cCI6MjA3OTMzNzM4NX0.k0Yqd8vgbdOiJZwFMrD9cV-_wC4gxhTr9w_N-WcYNy4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
