
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ktdkitbekremivwcpfzi.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0ZGtpdGJla3JlbWl2d2NwZnppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2ODcyMDksImV4cCI6MjAzMTI2MzIwOX0.j7B24qfhy8_7kOgNXIOs-Vdga4cDljg2BWuLGV-7CFs"
const supa = createClient(supabaseUrl, supabaseKey)
export default supa