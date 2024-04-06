/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import type { Todo } from '../../types';

dotenv.config();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ATLAS_CLUSTER_URL}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;
const clientOptions: any = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
await mongoose.connect(uri, clientOptions);

const { Schema } = mongoose;

const todoSchema = new Schema({
	title: String,
	stars: Number,
	finished: Boolean
});

export const getAllTodos = async () => {
	return new Promise((resolve, reject) => {
		try {
			(async () => {
				const response = mongoose.connection.db.collection(process.env.MONGO_COLLECTION);
				const todos = await response.find().toArray();
				resolve(todos);
			})();
		} catch (error: any) {
			reject({ message: `ERROR: ${error.message}` });
		}
	});
};

export const addTodo = async (todo: Todo) => {
	return new Promise((resolve, reject) => {
		try {
			(async () => {
				const TodoModel = mongoose.model('todo', todoSchema);
				const todoDoc = new TodoModel(todo);
				await todoDoc.save();
				resolve(todoDoc);
			})();
		} catch (error: any) {
			reject({ message: `ERROR: ${error.message}` });
		}
	});
};

export const deleteTodo = async (id: string) => {
	return new Promise((resolve, reject) => {
		try {
			(async () => {
				const TodoModel = mongoose.model('todo', todoSchema);
				const todo = await TodoModel.findByIdAndDelete(id);
				resolve(todo);
			})();
		} catch (error: any) {
			reject({ message: `ERROR: ${error.message}` });
		}
	});
};

export const editTodo = async (id: string, title: string) => {
	return new Promise((resolve, reject) => {
		try {
			(async () => {
				const TodoModel = mongoose.model('todo', todoSchema);

				const filter = { _id: id };
				const update = { title };
				const todo: Todo | null = await TodoModel.findOneAndUpdate(filter, update);
				if (todo) {
					todo.title = title;
					resolve(todo);
				} else {
					reject({ message: 'Todo was null' });
				}
			})();
		} catch (error: any) {
			reject({ message: `ERROR: ${error.message}` });
		}
	});
};
