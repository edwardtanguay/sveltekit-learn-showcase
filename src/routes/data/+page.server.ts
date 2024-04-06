/* eslint-disable @typescript-eslint/no-explicit-any */
import * as mongodb from '$lib/dataLayer/mongodb.server';

import type { Todo } from '../../types';

const _todos: any[] = await mongodb.getAllTodos();
const todos: Todo[] = [];
for (const _todo of _todos) {
	todos.push({
		title: _todo.title,
		stars: _todo.stars,   
		finished: _todo.finished  
	});
}

export function load() {
	return {
		todos
	};
}
