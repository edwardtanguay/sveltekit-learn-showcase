<script lang="ts">
	import type { Employee } from "../types";

	export let employee:Employee;
</script>

<div>
	<p>{employee.firstName} {employee.lastName}</p>
</div>