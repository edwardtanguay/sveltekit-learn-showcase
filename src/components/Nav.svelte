<script>
	import { page } from '$app/stores';

	const pageItems = [
		{
			href: '/',
			title: 'Home'
		},
		{
			href: '/basics',
			title: 'Basics'
		}
	];
</script>

<nav class="bg-slate-600 px-4 pb-1 mb-3 rounded text-slate-200 flex gap-3">
	{#each pageItems as pageItem}
		<a class:active={$page.url.pathname === pageItem.href} href={pageItem.href}>{pageItem.title}</a>
	{/each}
</nav>

<style>
	a.active {
		color: yellow;
	}
</style>
