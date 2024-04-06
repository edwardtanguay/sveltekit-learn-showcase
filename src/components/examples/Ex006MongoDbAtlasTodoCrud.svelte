<script lang="ts">
	import { onMount } from 'svelte';
	import * as mongodb from '$lib/dataLayer/mongodb';
	import type { Todo } from '../../types';

	let todos: Todo[] = [];

	// const fetchTodos = async () => {
	// 	try {
	// 		const todos = await mongodb.getAllTodos();
	// 	} catch (error: any) {
	// 		throw new Error(`ERROR: ${error.message}`);
	// 	}
	// };

	// onMount(fetchTodos);
</script>

<p>todos: {todos.length}</p>
