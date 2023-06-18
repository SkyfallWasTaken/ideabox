<script lang="ts">
	import '../app.postcss';

	import { browser } from '$app/environment';
	import isFirstVisit from '$lib/isFirstVisit';

	import MainNav from '$components/main-nav/MainNav.svelte';
	import WelcomeDialog from '$components/welcome-dialog/WelcomeDialog.svelte';
</script>

<MainNav />
<main class="p-4">
	{#if browser && isFirstVisit()}
		<WelcomeDialog />
	{/if}
	<slot />
</main>

<style>
	:global(b) {
		@apply font-semibold;
	}
</style>
