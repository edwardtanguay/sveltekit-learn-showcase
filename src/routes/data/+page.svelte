<script lang="ts">
	export let data;
	import Example from '../../components/Example.svelte';
	import Ex004ServerFileTodos from '../../components/examples/Ex004ServerFileTodos.svelte';
	import * as tools from '$lib/tools';
	import { invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';

	$: data, (data = data);

	onMount(() => {
		const interval = setInterval(() => {
			invalidateAll();
			console.log('just invalidated');
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	});

</script>

<section>
	<Example title="Ex005ArrayStateVariable">
		<Ex004ServerFileTodos />
	</Example>
	<Example title="Ex006MongoDbAtlasTodoCrud">
		<div>
			{#key data.todos}
				<p class="mb-3 mt-2">There are {data.todos.length} todos.</p>
				<ul class="font-mono text-orange-900">
					{#each data.todos as todo}
						<li>
							{`[${todo.id}] - ${tools.displayStars(todo.stars)} - ${todo.finished ? 'done' : 'todo'} - ${todo.title}`}
						</li>
					{/each}
				</ul>
			{/key}
		</div>
	</Example>
</section>
