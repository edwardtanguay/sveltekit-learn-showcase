import type { RouteParams } from "../../../types";

export const load = ({ params }: { params: RouteParams }) => {
	return {
		slug: params.slug
	};
};
