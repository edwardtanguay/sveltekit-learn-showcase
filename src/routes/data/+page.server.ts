/* eslint-disable @typescript-eslint/no-explicit-any */
import * as mongodb from '$lib/dataLayer/mongodb.server';

import type { Todo } from '../../types';


const fetchTodos = async () => {
	try {
		const todos:Todo[] = await mongodb.getAllTodos();
		return todos;
	} catch (error: any) {
		throw new Error(`ERROR: ${error.message}`);
	}
};

export function load() {
	return {
		fetchTodos
	};
}

