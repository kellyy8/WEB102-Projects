import { createClient } from '@supabase/supabase-js'

const URL = 'https://nnlspxriozmrgehkhisd.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ubHNweHJpb3ptcmdlaGtoaXNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA5NDAyMDcsImV4cCI6MjA0NjUxNjIwN30.ej_9Xwhoo_ol63lXHEUTgXPXVDBJtysdMIi09FPnoOc'
export const supabase = createClient(URL, API_KEY)