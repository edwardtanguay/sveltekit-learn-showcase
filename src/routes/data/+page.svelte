<script>
	export let data;
	import Example from '../../components/Example.svelte';
	import Ex004ServerFileTodos from '../../components/examples/Ex004ServerFileTodos.svelte';
</script>

<section>
	<Example title="Ex005ArrayStateVariable">
		<Ex004ServerFileTodos />
	</Example>
	<Example title="Ex006MongoDbAtlasTodoCrud">
		<div>
			<p>There are {data.todos.length} todos.</p>
			<ul>
				{#each data.todos as todo}
					<li>{todo.title}</li>
				{/each}
			</ul>
		</div>
	</Example>
</section>
