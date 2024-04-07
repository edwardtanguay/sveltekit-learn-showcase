<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import { navigating } from '$app/stores';
</script>

<Header />

{#if $navigating}
	<p>loading...</p>
{:else}
	<slot />
{/if}
