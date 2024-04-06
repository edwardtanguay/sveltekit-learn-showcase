<script lang="ts">
	import employees from '$lib/data/employees.json';
</script>

<p class="mt-6 mb-4">These employees are loaded in the list and single-item pages.</p>

<ul class="list-disc ml-6">
	{#each employees as employee}
		<li class="mb-2">
			<a href={`/employees/${employee.employeeID}`} class="underline"
				>{employee.firstName} {employee.lastName}</a
			>
		</li>
	{/each}
</ul>
