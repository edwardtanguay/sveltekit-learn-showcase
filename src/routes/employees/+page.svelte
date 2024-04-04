<script lang="ts">
	import employees from '../../data/employees.json';
</script>

<ul class="list-disc ml-6">
{#each employees as employee}
	<li><a href={`/employees/${employee.employeeID}`} class="underline">{employee.firstName} {employee.lastName}</a></li>
{/each}
</ul>
