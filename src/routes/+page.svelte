<script lang="ts">
	import Example from '../components/Example.svelte';
	import Header from '../components/Header.svelte';
	import SiteInfo from '../components/SiteInfo.svelte';
	import img from '$lib/images/sveltekit.jpg';
</script>

<Header />
<SiteInfo />

<h2 class="text-xl mt-3">Currently learning SvelteKit</h2>
<img class="mb-1 w-[20rem] rounded-lg mt-2" src={img} alt="developer" />
