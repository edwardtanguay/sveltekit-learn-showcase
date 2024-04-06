<script>
	export let data;
	import Example from '../../components/Example.svelte';
	import Ex004ServerFileTodos from '../../components/examples/Ex004ServerFileTodos.svelte';
	import * as tools from '$lib/tools';
</script>

<section>
	<Example title="Ex005ArrayStateVariable">
		<Ex004ServerFileTodos />
	</Example>
	<Example title="Ex006MongoDbAtlasTodoCrud">
		<div>
			<p class="mb-3 mt-2">There are {data.todos.length} todos.</p>
			<ul class="font-mono text-orange-900">
				{#each data.todos as todo}
					<li>
						{`[${todo.id}] - ${tools.displayStars(todo.stars)} - ${todo.finished ? 'done' : 'todo'} - ${todo.title}`}
					</li>
				{/each}
			</ul>
		</div>
	</Example>
</section>
