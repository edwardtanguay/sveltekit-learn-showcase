<script lang="ts">
	import _todos from '$lib/data/todos.json';
	let todos = _todos;
	$: totalDoubled = todos.length * 2;

	const addTodo = () => {
		todos.push('999');
		todos = structuredClone(todos);
	};
</script>

<p class="w-fit max-w-[15rem] text-xs">
	The todo data is being permeated in a file. This won't work on Vercel.
</p>
<p class="w-fit max-w-[15rem] text-xs">TODO: REDO THIS WITH MONGODB</p>
<button on:click={addTodo} class="bg-gray-300 px-2 mt-2 rounded border border-gray-500 w-fit"
	>Add Todo</button
>

<ul>
	{#each todos as todo}
		<li>{todo}</li>
	{/each}
</ul>
<p class=" pt-1">number of todos: {todos.length}</p>
<p class=" pt-1">number of todos doubled: {totalDoubled}</p>
