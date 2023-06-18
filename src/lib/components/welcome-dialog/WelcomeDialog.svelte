<script lang="ts">
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle
	} from '$ui/dialog';

	import { Bug } from 'lucide-svelte';
	import { Alert, AlertDescription, AlertTitle } from '$ui/alert';
</script>

<Dialog open={true}>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Welcome to IdeaBox! 👋</DialogTitle>
			<DialogDescription>The ultimate place to show off what you've been up to!</DialogDescription>
		</DialogHeader>

		<p>
			IdeaBox is a website where you can share <b>your creations and achievements</b> with the world.
			Whether it's a cool art piece, a game, a website, or anything else that you're proud of, feel free
			to post it here and inspire others with your ideas, or just look at some other posts to see what
			people are up to!
		</p>

		<p>
			<b class="text-amber-400">Earn badges</b> for posting consistently and keeping your
			<b>daily streak of posts.</b> IdeaBox is a community of makers and doers who want to learn, grow,
			and have fun. Join us today and unleash your creativity!
		</p>

		<Alert>
			<Bug class="h-5 w-5" />
			<AlertTitle>IdeaBox is in beta!</AlertTitle>
			<AlertDescription
				>If you find any bugs or want to make suggestions or feature requests, feel free to hit me
				up!</AlertDescription
			>
		</Alert>
	</DialogContent>
</Dialog>
