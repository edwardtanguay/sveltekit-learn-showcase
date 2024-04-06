import { json } from '@sveltejs/kit';


export const GET = async () => {
	return json(['111', '444']);
}