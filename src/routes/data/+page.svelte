<script lang="ts">
	export let data;
	import Example from '../../components/Example.svelte';
	import Ex004ServerFileTodos from '../../components/examples/Ex004ServerFileTodos.svelte';
	import * as tools from '$lib/tools';
	import { goto, invalidateAll } from '$app/navigation';
	// import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	$: data, (data = data);

	onMount(() => {
		const interval = setInterval(() => {
			invalidateAll();
			console.log('just invalidated');
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	// function reloadPage() {
	// 	const thisPage = window.location.pathname;

	// 	console.log('goto ' + thisPage);

	// 	goto('/').then(() => goto(thisPage));
	// }

	// reloadPage();
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
