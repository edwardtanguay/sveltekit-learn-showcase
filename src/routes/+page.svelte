<script lang="ts">
	import SiteInfo from '../components/SiteInfo.svelte';
	import img from '$lib/images/sveltekit.jpg';
</script>

<SiteInfo />
<h2 class="text-xl mt-3">Currently learning SvelteKit</h2>
<img class="mb-1 w-[20rem] rounded-lg mt-2" src={img} alt="developer" />

<h2 class="text-xl mt-3">Known Problems and Todos</h2>
<ul class="list-disc ml-6">
	<li>
		FIX: The responsive menu and solution as a whole is something I created with limited SvelteKit
		knowledge. Although it works more of less, it has the side effect that <b>the menu bar blinks</b
		> when you click from page to page.
	</li>
	<li>
		FIX: Sometimes when clicking a page, there is no response for 1-2 seconds. Fix it so that
		clicking a new page gives a response immediately then gives a nice user experience until the
		page is loaded, e.g. perhaps a fade or spinner.
	</li>
	<li>RESOLVE: I couldn't get $navigate to show a loading indicator.'</li>
</ul>
