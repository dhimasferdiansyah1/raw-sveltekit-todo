import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	const todos = await prisma.todo.findMany({
		where: {
			completed: true
		},
		select: {
			id: true,
			title: true,
			completed: true,
			createdAt: true
		},
		orderBy: {
			createdAt: 'desc'
		}
	});
	return {
		todos
	};
};

export const actions = {
	update: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');
		const completed = formData.get('completed');

		if (!id) {
			return {
				status: 400,
				body: {
					error: 'No ID provided'
				}
			};
		}

		await prisma.todo.update({
			where: {
				id: String(id)
			},
			data: {
				completed: completed === 'true'
			}
		});
		return {
			status: 302,
			headers: {
				location: '/done'
			}
		};
	}
};
