<script lang="ts">
	let count = 0;

	$: doubled = count * 2;

	const increment = () => {
		count++;
	};
</script>

<button on:click={increment} class="bg-gray-300 px-2 pb-1 mt-2 rounded border border-gray-500"
	>count: {count}</button
>
<p class=" pt-1">doubled: {doubled}</p>
