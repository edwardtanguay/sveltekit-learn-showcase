<script lang="ts">
	import { mobileMenuShowing } from '../stores';
	import Nav from './Nav.svelte';
	import 'iconify-icon';

	const handleMenuHideShow = () => {
		$mobileMenuShowing = !$mobileMenuShowing;
	};
</script>

<header
	class="flex justify-between place-items-center border-b border-slate-500 pb-2 md:border-0 md:pb-0 mb-3 md:mb-1"
>
	<h1 class="text-orange-800 text-[1.4rem] md:text-[1.7rem] flex gap-2 place-items-end">
		<a href="/">SvelteKit Learn Showcase</a> <p class="text-[.7rem] mb-1">ver. 0.44</p>
	</h1>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<iconify-icon
		on:click={handleMenuHideShow}
		icon="charm:menu-hamburger"
		class="text-2xl md:hidden cursor-pointer"
	></iconify-icon>
</header>
<Nav />
