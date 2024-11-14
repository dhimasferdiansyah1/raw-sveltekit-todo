<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
</script>

<div class="h-screen bg-[#FBFBFB]">
	<div class="container mx-auto max-w-3xl px-4 py-32">
		<div class="flex flex-col border border-gray-300">
			<div class="flex rounded-t-lg bg-gray-100 px-4 py-2">
				<h1 class="text-gray-500">Add a new todo</h1>
			</div>
			<div class="flex bg-white p-4">
				<form
					action="?/post"
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
