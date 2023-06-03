<script lang="ts">
	import '../app.postcss';

	import Header from '$components/header/Header.svelte';
</script>

<Header />
<main class="p-4">
	<slot />
</main>
