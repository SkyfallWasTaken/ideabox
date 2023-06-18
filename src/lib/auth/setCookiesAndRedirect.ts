import type { Cookies } from '@sveltejs/kit';
import { accessTokenName, refreshTokenName } from './oauthCookieNames';

export default function (response: any, cookies: Cookies) {
	// redirect user to front page with cookies set
	const accessTokenExpiry = new Date(Date.now() + response.expires_in); // 10 minutes
	const refreshTokenExpiry = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
	console.log('Refresh successful! Redirecting to /');
	cookies.set(accessTokenName, response.access_token, { expires: accessTokenExpiry, path: '/' });
	cookies.set(refreshTokenName, response.refresh_token, { expires: refreshTokenExpiry, path: '/' });
	return new Response('Redirecting...', {
		status: 302,
		headers: {
			Location: '/'
		}
	});
}
