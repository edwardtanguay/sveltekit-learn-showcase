<script lang="ts">
	import type { Employee } from "../types";

	export let employee:Employee;
</script>

<div>
	<img src={`../images/employees/employee_${employee.employeeID}.jpg`} alt="employee"/>
	<p>{employee.firstName} {employee.lastName}</p>
</div>