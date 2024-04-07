<script>
	import Example from '../../components/Example.svelte';
	import Ex001Test from '../../components/examples/Ex001Test.svelte';
	import Ex002StaticImages from '../../components/examples/Ex002StaticImages.svelte';
	import Ex003DynamicImages from '../../components/examples/Ex003DynamicImages.svelte';
	import Ex005ArrayStateVariable from '../../components/examples/Ex005ArrayStateVariable.svelte';
	import Ex007Stores from '../../components/examples/Ex007Stores.svelte';
</script>

<section class="flex gap-6">
	<section>
		<Example title="Ex001Test">
			<Ex001Test />
		</Example>
		<Example title="Ex002StaticImages">
			<Ex002StaticImages />
		</Example>
		<Example title="Ex003DynamicImages">
			<Ex003DynamicImages />
		</Example>
	</section>
	<section>
		<Example title="Ex005ArrayStateVariable">
			<Ex005ArrayStateVariable />
		</Example>
	</section>
	<section>
		<Example title="Ex007Stores">
			<Ex007Stores/>
		</Example>
	</section>
</section>
