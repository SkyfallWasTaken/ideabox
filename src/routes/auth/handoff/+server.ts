const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
const DISCORD_REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;
const DISCORD_ENDPOINT = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
	DISCORD_REDIRECT_URI
)}&response_type=code&scope=identify`;

export async function GET() {
	console.log(DISCORD_REDIRECT_URI);
	return new Response('Handing you off to Discord...', {
		headers: { Location: DISCORD_ENDPOINT },
		status: 302
	});
}
