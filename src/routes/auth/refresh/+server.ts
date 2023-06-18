import { json } from '@sveltejs/kit';
import setCookiesAndRedirect from '$lib/auth/setCookiesAndRedirect';

const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = import.meta.env.VITE_DISCORD_CLIENT_SECRET;
const DISCORD_REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET({ url, cookies }) {
	const refreshToken = url.searchParams.get('code');
	if (!refreshToken) {
		return json({ error: 'No refresh token found!' }, { status: 401 });
	}

	// initializing data object to be pushed to Discord's token endpoint.
	// quite similar to what we set up in callback.js, expect with different grant_type.
	const dataObject = {
		client_id: DISCORD_CLIENT_ID,
		client_secret: DISCORD_CLIENT_SECRET,
		grant_type: 'refresh_token',
		redirect_uri: DISCORD_REDIRECT_URI,
		refresh_token: refreshToken,
		scope: 'identify'
	};

	// performing a Fetch request to Discord's token endpoint
	const request = await fetch('https://discord.com/api/oauth2/token', {
		method: 'POST',
		body: new URLSearchParams(dataObject),
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	});

	const response = await request.json();
	if (response.error) {
		return json({ error: response.error }, { status: 401 });
	}

	// redirect user to front page with cookies set
	return setCookiesAndRedirect(response, cookies);
}
