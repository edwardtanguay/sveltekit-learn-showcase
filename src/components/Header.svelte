<script lang="ts">
	import Nav from './Nav.svelte';
	import 'iconify-icon';

	const handleMenuHideShow = () => {
		alert('hide/show')
	}
</script>

<div class="flex justify-between place-items-center mb-2 md:mb-1">
	<h1 class="text-orange-800 text-[1.4rem] md:text-[1.7rem]">SvelteKit Learn Showcase</h1>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<iconify-icon on:click={handleMenuHideShow} icon="charm:menu-hamburger" class="text-2xl md:hidden cursor-pointer"></iconify-icon>
</div>
<Nav />
