import { createClient } from '@supabase/supabase-js'

const URL = 'https://ghhvxdjcoyigsnopfust.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoaHZ4ZGpjb3lpZ3Nub3BmdXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5OTc4NzYsImV4cCI6MjA0NzU3Mzg3Nn0.63KbInmp7tBqTHMxm9YVlN2sT4QPxX9E0xp4XADQGyg'
export const supabase = createClient(URL, API_KEY)