<script>
	import { page } from '$app/stores';

	console.log('pathname', $page.url.pathname);
</script>

<nav class="bg-slate-600 px-3 py-1 mb-3 rounded text-slate-200 flex gap-2">
	<a class:active={$page.url.pathname === '/'} href="/">Welcome</a>
	<a class:active={$page.url.pathname === '/basics'} href="/basics">Basics</a>
</nav>

<style>
	a.active {
		color: rgb(253, 144, 94) !important;
	}
</style>
