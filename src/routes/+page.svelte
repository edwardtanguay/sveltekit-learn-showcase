<script lang="ts">
	import Example from '../components/Example.svelte';
	import Header from '../components/Header.svelte';
	import SiteInfo from '../components/SiteInfo.svelte';
	import img from '$lib/images/sveltekit.jpg';
</script>

<Header />
<SiteInfo />

<img class="mb-1 w-[20rem] rounded-lg mt-6" src={img} alt="developer" />
