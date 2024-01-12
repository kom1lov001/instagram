import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://adbxawacigfpgfhyhzfo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkYnhhd2FjaWdmcGdmaHloemZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3OTA2MDIsImV4cCI6MjAyMDM2NjYwMn0.J0q1_aECEXWqq57IBo49WFMP-df87LInUJkyWnayZYQ";
export const supabase = createClient(supabaseUrl, supabaseKey);
