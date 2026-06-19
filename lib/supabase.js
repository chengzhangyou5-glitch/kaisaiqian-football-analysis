const { createClient } = require("@supabase/supabase-js");
const { getConfig } = require("./config");

let adminClient;

function clientOptions() {
  return { auth: { autoRefreshToken: false, persistSession: false, detectSessionInUrl: false } };
}

function getPublicSupabase() {
  const config = getConfig();
  return createClient(config.supabaseUrl, config.publishableKey, clientOptions());
}

function getAdminSupabase() {
  const config = getConfig();
  adminClient ||= createClient(config.supabaseUrl, config.secretKey, clientOptions());
  return adminClient;
}

module.exports = { getPublicSupabase, getAdminSupabase };
