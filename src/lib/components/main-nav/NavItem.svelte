<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';

	let className = '';
	export { className as class };
	export let href: string;
</script>

<a
	{href}
	aria-current={$page.url.pathname === href ? 'page' : undefined}
	class={cn('text-sm font-medium transition-colors hover:text-primary', className)}><slot /></a
>

<style>
	a:not([aria-current='page']) {
		@apply text-muted-foreground;
	}
</style>
