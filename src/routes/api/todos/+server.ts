import { json } from '@sveltejs/kit';
import todos from '$lib/data/todos.json'; 

export const GET = async () => {
	return json(todos);
}