<script lang="ts">
	import { page } from '$app/stores';

	type PageItem = {
		href: string;
		title: string;
		kind: "shallow" | "deep"
	};

	const pageItems: PageItem[] = [
		{
			href: '/',
			title: 'Home',
			kind: "shallow" 
		},
		{
			href: '/basics',
			title: 'Basics',
			kind: "shallow"
		},
		{
			href: '/employees',
			title: 'Employees',
			kind: "deep"
		}
	];

	const highlightMenuItem = (page: any, pageItem: PageItem) => {
		let rb = false;
		const pathname =$page.url.pathname; 
		rb = pathname === pageItem.href;
		if(pageItem.kind === "deep") {
			if(pathname.startsWith(pageItem.href)) {
				rb = true;
			}
		}
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
