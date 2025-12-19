// ./src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yjnmhtjplhougjoygdcz.supabase.co';
const supabaseKey =
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlqbm1odGpwbGhvdWdqb3lnZGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyOTQyMDksImV4cCI6MjA4MDg3MDIwOX0.4YX-aW15wpMXlxqsM4w9_sesgyQkBCIN_TqSriYotSc';

export const supabase = createClient(supabaseUrl, supabaseKey);
