<script lang="ts">
	import { page } from '$app/stores';
	import * as config from '../config';

	console.log(config.getResponsiveStatus());

	type PageItem = {
		href: string;
		title: string;
		kind: 'shallow' | 'deep';
	};

	const pageItems: PageItem[] = [
		{
			href: '/',
			title: 'Home',
			kind: 'shallow'
		},
		{
			href: '/basics',
			title: 'Basics',
			kind: 'shallow'
		},
		{
			href: '/employees',
			title: 'Employees',
			kind: 'deep'
		},
		{
			href: '/serverloadedemployees',
			title: 'SL Employees',
			kind: 'deep'
		}
	];

	const highlightMenuItem = (page: any, pageItem: PageItem) => {
		let rb = false;
		const pathname = $page.url.pathname;
		rb = pathname === pageItem.href;
		if (pageItem.kind === 'deep') {
			if (pathname.startsWith(pageItem.href)) {
				rb = true;
			}
		}
		return rb;
	};
</script>

<nav class="bg-slate-600 px-4 pt-2 md:pt-1 pb-3 md:pb-2 mb-3 rounded text-slate-200 flex gap-3 flex-col md:flex-row">
	{#each pageItems as pageItem}
		<div>
			<a class:active={highlightMenuItem($page, pageItem)} href={pageItem.href}>{pageItem.title}</a>
		</div>
	{/each}
</nav>

<style>
	a.active {
		color: yellow;
	}
</style>
