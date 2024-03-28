
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://snrxgdtxptywxohrbswa.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucnhnZHR4cHR5d3hvaHJic3dhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE2MjMwNjUsImV4cCI6MjAyNzE5OTA2NX0.7bi5KxQr18rSW-lDs0fzbHTML5S2TaCFRIb5MK4p1Ew'
)