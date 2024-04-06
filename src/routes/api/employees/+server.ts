import { json } from '@sveltejs/kit';
import employees from '$lib/data/employees.json'; 

export const GET = async () => {
	return json(employees);
}