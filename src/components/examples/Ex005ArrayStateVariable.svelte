<script lang="ts">
	import _todos from '$lib/data/todos.json';

	let todos = _todos;
	let newTodo = '';

	$: totalDoubled = todos.length * 2;

	const addTodo = () => {
		todos.push(newTodo);
		newTodo = '';
		todos = structuredClone(todos);
	};
</script>

<div class="w-[18rem]">
	<form>
		<input bind:value={newTodo} placeholder="new todo" />
		<button on:click={addTodo} class="bg-gray-300 px-2 mt-2 rounded border border-gray-500 w-fit"
			>Add Todo</button
		>
	</form>

	<ul class="list-disc ml-3 mb-3 mt-2">
		{#each todos as todo}
			<li>{todo}</li>
		{/each}
	</ul>
	<div>
		<p>number of todos: {todos.length}</p>
		<p>number of todos doubled: {totalDoubled}</p>
	</div>
	<p class="devNote w-fit mt-2">
		Note that for arrays and objects, you need to save a REFERENCE TO A NEW VARIABLE instead of just
		mutating the value of the original variable, e.g. by spreading the old variable or using
		structuredClone.
	</p>

</div>
