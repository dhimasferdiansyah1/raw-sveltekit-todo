<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types.js';
	export let data: PageData;
</script>

<div class="h-screen bg-[#FBFBFB]">
	<div class="container mx-auto max-w-3xl px-4 py-32">
		<div class="flex flex-col border border-gray-300">
			<div class="flex items-center gap-4 rounded-t-lg bg-gray-100 px-4 py-2">
				<h1 class="  text-gray-500">Edit todo</h1>
				<span
					class="flex rounded-full px-2 py-1 text-xs font-semibold leading-5 {data.todo?.completed
						? 'bg-green-100 text-green-800'
						: 'bg-yellow-100 text-yellow-800'}"
				>
					{data.todo?.completed ? 'Completed' : 'Pending'}
				</span>
			</div>
			<div class="flex bg-white p-4">
				<form
					action="?/update"
					method="POST"
					use:enhance={() => {
						return async () => {
							goto('/');
						};
					}}
					class="w-full"
				>
					<input
						type="text"
						name="title"
						id="title"
						value={data.todo?.title}
						class="w-full border border-gray-300 p-2"
						required
						placeholder="Enter the title of the todo"
					/>
					<button type="submit" class="mt-4 bg-blue-500 px-4 py-2 text-white hover:brightness-110"
						>Save</button
					>
				</form>
			</div>
		</div>
	</div>
</div>
