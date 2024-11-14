import prisma from '$lib/prisma';

export const actions = {
	post: async ({ request }) => {
		const formData = await request.formData();
		const title = formData.get('title')?.toString() || '';

		await prisma.todo.create({
			data: {
				title,
				completed: false
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
