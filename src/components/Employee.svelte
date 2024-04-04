<script lang="ts">
	import type { Employee } from '../types';

	export let employee: Employee;
</script>

<div class="flex gap-3 w-[100vmin] mt-6">
	<div class="shrink-0 grow-0">
		<img
			src={`../images/employees/employee_${employee.employeeID}.jpg`}
			alt="employee"
			class="rounded-lg w-[20vmin] align-top"
		/>
	</div>
	<div>
		<p class="text-2xl">{employee.firstName} {employee.lastName}</p>
		<p class="title text-xl italic">{employee.title}</p>
		<p class="text-orange-950 italic text-xl mt-2">{employee.notes}</p>
	</div>
</div>
