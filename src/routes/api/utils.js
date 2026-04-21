import { createClient } from "@supabase/supabase-js";
import { env } from "$env/dynamic/private";
import { env as envPublic } from "$env/dynamic/public";

// -----------------------------------------------------------------------------
// Supabase Client (variables are stored as secrets in Cloudflare Worker -- see README)
// -----------------------------------------------------------------------------

const hasSupabaseServerConfig = Boolean(envPublic.PUBLIC_SUPABASE_URL && env.SUPABASE_API_KEY);
const supabaseServerConfigError = {
	message: "Missing PUBLIC_SUPABASE_URL or SUPABASE_API_KEY; API writes are disabled."
};
let hasWarnedMissingSupabaseServerConfig = false;

function createSupabaseServerNoopClient() {
	const withConfigError = async () => {
		if (!hasWarnedMissingSupabaseServerConfig) {
			hasWarnedMissingSupabaseServerConfig = true;
			console.warn(supabaseServerConfigError.message);
		}
		return { data: null, error: supabaseServerConfigError };
	};

	return {
		from: () => ({
			insert: withConfigError
		})
	};
}

export const supabase = hasSupabaseServerConfig
	? createClient(envPublic.PUBLIC_SUPABASE_URL, env.SUPABASE_API_KEY)
	: createSupabaseServerNoopClient();

// -----------------------------------------------------------------------------
// Utilities
// -----------------------------------------------------------------------------

// MD5 hash (source: https://stackoverflow.com/a/64795218)
export async function hash(message) {
	if (!message) return;

	const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
	const hashBuffer = await crypto.subtle.digest("MD5", msgUint8); // hash the message
	const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
	const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join(""); // convert bytes to hex string

	return hashHex;
}
