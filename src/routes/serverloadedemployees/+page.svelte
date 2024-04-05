<script lang="ts">
	export let data;
</script>

<ul class="list-disc ml-6 mt-6">
	{#each data.employees as employee}
		<li class="mb-2">
			<a href={`/serverloadedemployees/${employee.employeeID}`} class="underline"
				>{employee.firstName} {employee.lastName}</a
			>
		</li>
	{/each}
</ul>
