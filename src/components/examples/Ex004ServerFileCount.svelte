<script lang="ts">
	let count = 0;

	$: doubled = count * 2;

	const increment = () => {
		count++;
	};
</script>

<p class="w-fit max-w-[20rem]">This value is being permeated in a file. This won't work on Vercel.</p>
<button on:click={increment} class="bg-gray-300 px-2 pb-1 mt-2 rounded border border-gray-500 w-fit"
	>count: {count}</button
>
<p class=" pt-1">doubled: {doubled}</p>
