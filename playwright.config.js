const config = {
	webServer: {
		command: "npm run preview",
		port: 4173,
		env: {
			...process.env,
			PUBLIC_SUPABASE_URL: process.env.PUBLIC_SUPABASE_URL || "https://127.0.0.1",
			PUBLIC_SUPABASE_API_KEY: process.env.PUBLIC_SUPABASE_API_KEY || "mock",
			SUPABASE_API_KEY: process.env.SUPABASE_API_KEY || "mock"
		}
	},
	timeout: 60000,
	retries: 3,
	expect: { timeout: 20000 },
	preserveOutput: "never",
	testDir: "tests",
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
