<script lang="ts">
	import Nav from './Nav.svelte';
	import 'iconify-icon';
</script>

<div class="flex justify-between place-items-center mb-2 md:mb-1">
	<h1 class="text-orange-800 text-[1.4rem] md:text-[1.7rem]">SvelteKit Learn Showcase</h1>
	<iconify-icon icon="charm:menu-hamburger" class="text-2xl md:hidden"></iconify-icon>
</div>
<Nav />
