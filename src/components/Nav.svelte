<script lang="ts">
	import { page } from '$app/stores';

	type PageItem = {
		href: string;
		title: string;
	};

	const pageItems: PageItem[] = [
		{
			href: '/',
			title: 'Home'
		},
		{
			href: '/basics',
			title: 'Basics'
		},
		{
			href: '/blog',
			title: 'Blog'
		}
	];

	const highlightMenuItem = (page: any, pageItem: PageItem) => {
		let rb = false;
		rb = $page.url.pathname === pageItem.href;
		return rb;
	};
</script>

<nav class="bg-slate-600 px-4 pb-1 mb-3 rounded text-slate-200 flex gap-3">
	{#each pageItems as pageItem}
		<a class:active={highlightMenuItem($page, pageItem)} href={pageItem.href}>{pageItem.title}</a>
	{/each}
</nav>

<style>
	a.active {
		color: yellow;
	}
</style>
