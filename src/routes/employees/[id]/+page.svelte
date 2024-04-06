<script lang="ts">
	import employees from '$lib/data/employees.json';
	import { page } from '$app/stores';
	import Employee from '../../../components/Employee.svelte';

	const employee = employees.find((m) => String(m.employeeID) === $page.params.id);
</script>

{#if employee}
	<Employee employee={employee} />
{:else}
	<p>
		ID "{$page.params.id}" does not exist, see
		<a href="/employees" class="underline">employee list</a>.
	</p>
{/if}

<p class="mt-6">view list of <a class="underline" href="/employees">all employees</a></p>
