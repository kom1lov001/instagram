import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ywgzhaurrsrjmetxdnni.supabase.co";
const supabaseKey =
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3Z3poYXVycnNyam1ldHhkbm5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3MTAyNTcsImV4cCI6MjAyMDI4NjI1N30
    .C -
  riqQDEdO -
  GSC41 -
  pFvPf5ATYr3Ad8fL3kdYcT8h2c;
export const supabase = createClient(supabaseUrl, supabaseKey);
