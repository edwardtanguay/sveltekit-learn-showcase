<script lang="ts">
	import employees from '../../../data/employees.json';
	import {page} from '$app/stores';

	const employee = employees.find(m => String(m.employeeID) === $page.params.id)
</script>

<p>{employee?.lastName}</p>