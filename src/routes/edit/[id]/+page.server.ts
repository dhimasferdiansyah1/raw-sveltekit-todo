import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async ({ params }) => {
	const todo = await prisma.todo.findUnique({
		where: {
			id: params.id
		},
		select: {
			id: true,
			title: true,
			completed: true
		}
	});
	return {
		todo
	};
};

export const actions = {
	update: async ({ params, request }) => {
		const formData = await request.formData();
		const title = formData.get('title');

		await prisma.todo.update({
			where: {
				id: params.id
			},
			data: {
				title: title?.toString()
			}
		});
		return {
			status: 302,
			headers: {
				location: '/'
			}
		};
	}
};
