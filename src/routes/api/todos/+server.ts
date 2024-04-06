import { json } from '@sveltejs/kit';
import * as tools from '../../../tools';

const todos = tools.getArrayFromJsonFile('$lib/data/todos.json');

export const GET = async () => {
	return json(todos);
}