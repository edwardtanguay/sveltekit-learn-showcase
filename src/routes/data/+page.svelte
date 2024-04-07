<script lang="ts">
	export let data;
	import Example from '../../components/Example.svelte';
	import Ex004ServerFileTodos from '../../components/examples/Ex004ServerFileTodos.svelte';
	import * as tools from '$lib/tools';
	import { invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Ex007Stores from '../../components/examples/Ex007Stores.svelte';

	onMount(() => {
		invalidateAll();
	});
</script>

<section>
	<Example title="Ex005ArrayStateVariable">
		<Ex004ServerFileTodos />
	</Example>
	<Example title="Ex006MongoDbAtlasTodoCrud">
		<div class="w-[35rem]">
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
			<p class="devNote">These todos are being fetched directly from a MongoDB database in the +page.server.ts file, which accesses environment variables to get the connection strings, etc. They are refetched on onMount() i.e. when the user reloads the browser.</p>
		</div>
	</Example>
<Example title="Ex007Stores">
	<p>PAGE: $page.url.pathname = {$page.url.pathname}</p>
	<Ex007Stores/>
</Example>
</section>
