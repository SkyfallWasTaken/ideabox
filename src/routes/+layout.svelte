<script lang="ts">
	import '../app.postcss';

	import { browser } from '$app/environment';
	import isFirstVisit from '$lib/isFirstVisit';

	import MainNav from '$components/main-nav/MainNav.svelte';
	import WelcomeDialog from '$components/welcome-dialog/WelcomeDialog.svelte';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { SupabaseClient } from '@supabase/supabase-js';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
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
