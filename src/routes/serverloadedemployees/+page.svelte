<script lang="ts">
	export let data;
</script>

<p class="mt-6 mb-4">These employees are loaded in server-side loading pages.</p>

<ul class="list-disc ml-6">
	{#each data.employees as employee}
		<li class="mb-2">
			<a href={`/serverloadedemployees/${employee.employeeID}`} class="underline"
				>{employee.firstName} {employee.lastName}</a
			>
		</li>
	{/each}
</ul>
