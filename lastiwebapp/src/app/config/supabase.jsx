import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qjhregjhqkdytxlqzjpd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqaHJlZ2pocWtkeXR4bHF6anBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3MTY2NDEsImV4cCI6MjAxNjI5MjY0MX0._ynVU0eK_DtmXo4N6qPw5zyFLA8AqnLWL3kN6tyRQKU'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase