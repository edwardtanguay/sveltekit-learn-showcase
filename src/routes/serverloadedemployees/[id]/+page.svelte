<script lang="ts">
	import Employee from '../../../components/Employee.svelte';
	export let data;
</script>

{#if data.employee}
	<Employee employee={data.employee} />
{:else}
	<p>
		Employee does not exist, see
		<a href="/serverloadedemployees" class="underline">employee list</a>.
	</p>
{/if}
