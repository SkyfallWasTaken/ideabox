import { accessTokenName, refreshTokenName } from '$lib/auth/oauthCookieNames';

export async function GET({ cookies }) {
	cookies.delete(accessTokenName);
	cookies.delete(refreshTokenName);

	return new Response('Redirecting...', {
		status: 302,
		headers: {
			Location: '/'
		}
	});
}
