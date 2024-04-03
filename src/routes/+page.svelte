<script>
	import Example from '../components/Example.svelte';
	import Header from '../components/Header.svelte';
	import Ex001Test from '../components/examples/Ex001Test.svelte';
	import Ex002StaticImages from '../components/examples/Ex002StaticImages.svelte';
	import Ex003DynamicImages from '../components/examples/Ex003DynamicImages.svelte';
	import Ex002DynamicImages from '../components/examples/Ex003DynamicImages.svelte';
</script>

<Header />
<Example title="Ex001Test">
	<Ex001Test />
</Example>
<Example title="Ex002StaticImages">
	<Ex002StaticImages />
</Example>
<Example title="Ex003DynamicImages">
	<Ex003DynamicImages/>
</Example>
