// import fs from 'fs';
import _data from '$lib/data/todos.json';

const data = JSON.stringify(_data);

export const getArrayFromJsonFile = (pathAndFileName: string) => {
	try {
		console.log(pathAndFileName);
		// const data = fs.readFileSync('$lib/data/todos.json', 'utf8');
		return JSON.parse(data);
	} catch (error) {
		console.error('Error reading JSON file:', error);
		return null;
	}
};
