<script>
	import NavItem from './NavItem.svelte';
</script>

<div class="border-b">
	<div class="flex h-16 items-center px-4">
		<p class="hidden sm:block sm:show">IdeaBox</p>
		<nav class="flex items-center space-x-4 lg:space-x-6 sm:mx-4">
			<NavItem href="/">Posts</NavItem>
			<NavItem href="/me">Profile</NavItem>
		</nav>
		<div class="ml-auto flex items-center space-x-4">
			<div>
				<input
					class="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-9 md:w-[100px] lg:w-[300px]"
					type="search"
					placeholder="Search..."
				/>
			</div>
			<span class="relative flex shrink-0 w-9 aspect-square overflow-hidden rounded-full"
				><img src="https://api.dicebear.com/6.x/thumbs/png?seed=Hypex&size=48" alt="@hypex" />
			</span>
		</div>
	</div>
</div>
