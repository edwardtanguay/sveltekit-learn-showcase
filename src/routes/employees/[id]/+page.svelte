<script lang="ts">
	import employees from '../../../data/employees.json';
	import {page} from '$app/stores';

	const employee = employees.find(m => String(m.employeeID) === $page.params.id);
</script>

{#if employee}
<p>{employee?.lastName}</p>
{:else}
<p>ID "{$page.params.id}" does not exist, see <a href="/employees" class="underline">employee list</a>.</p>
{/if}