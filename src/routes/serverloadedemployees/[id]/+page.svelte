<script lang="ts">
	import Employee from '$lib/components/Employee.svelte';
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

<p class="mt-6">view list of <a class="underline" href="/serverloadedemployees">all server-side loaded employees</a></p>
