<script>
	import Example from '../../components/Example.svelte';
	import Ex001Test from '../../components/examples/Ex001Test.svelte';
	import Ex002StaticImages from '../../components/examples/Ex002StaticImages.svelte';
	import Ex003DynamicImages from '../../components/examples/Ex003DynamicImages.svelte';

	let message = 'this is the message';
	const changeMessage = () => {
		message = 'message was changed';
	};
</script>

<!-- {message}
<div>
	<button on:click={changeMessage} class="bg-gray-300 px-2 py-1 rounded mt-2">change the message</button>
</div> -->
<Example title="Ex001Test">
	<Ex001Test />
</Example>
<Example title="Ex002StaticImages">
	<Ex002StaticImages />
</Example>
<Example title="Ex003DynamicImages">
	<Ex003DynamicImages />
</Example>
