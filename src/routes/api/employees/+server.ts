import { json } from '@sveltejs/kit';
import employees from '../../../data/employees.json'; 

export const GET = async () => {
	return json(employees);
}