import setCookiesAndRedirect from '$lib/auth/setCookiesAndRedirect';
import { error } from '@sveltejs/kit';

const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = import.meta.env.VITE_DISCORD_CLIENT_SECRET;
const DISCORD_REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET({ url, cookies }) {
	// fetch returnCode set in the URL parameters.
	const returnCode = url.searchParams.get('code');
	console.log('returnCode =>', returnCode);

	// initializing data object to be pushed to Discord's token endpoint.
	// the endpoint returns access & refresh tokens for the user.
	const dataObject: Record<string, string> = {
		client_id: DISCORD_CLIENT_ID,
		client_secret: DISCORD_CLIENT_SECRET,
		grant_type: 'authorization_code',
		redirect_uri: DISCORD_REDIRECT_URI,
		code: returnCode || '',
		scope: 'identify'
	};

	// performing a Fetch request to Discord's token endpoint
	const request = await fetch('https://discord.com/api/oauth2/token', {
		method: 'POST',
		body: new URLSearchParams(dataObject),
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	});

	const response = await request.json();

	// redirect to front page in case of error
	if (response.error) {
		throw error(401, response.error);
	}

	// redirect user to front page with cookies set
	return setCookiesAndRedirect(response, cookies);
}
