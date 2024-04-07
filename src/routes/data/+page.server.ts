/* eslint-disable @typescript-eslint/no-explicit-any */
import * as mongodb from '$lib/dataLayer/mongodb.server';

import type { Todo } from '../../types';

const loadAllTodos = async () => {
	const _todos: any[] = await mongodb.getAllTodos();
	const todos: Todo[] = [];
	for (const _todo of _todos) {
		todos.push({
			id: String(_todo._id),
			title: _todo.title,
			stars: _todo.stars,
			finished: _todo.finished
		});
	}
	return todos;
};

export async function load() {
	return {
		todos: await loadAllTodos()
	};
}
