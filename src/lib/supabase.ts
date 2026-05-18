import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://piphtchzshkykelzdzfs.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImM4OGRjNzdjLWQ2YTUtNDhhOC04MTBmLTYzMmNiOTU1MDgwZCJ9.eyJwcm9qZWN0SWQiOiJwaXBodGNoenNoa3lrZWx6ZHpmcyIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzc4NzYyMTAzLCJleHAiOjIwOTQxMjIxMDMsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.6-AxTu9PlemmdyqBZl_MY-A46zeF0gdfP_uLSHdf9yg';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };