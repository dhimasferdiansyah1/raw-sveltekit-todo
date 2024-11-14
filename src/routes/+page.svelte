<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import X from 'lucide-svelte/icons/x';
	import MoreHorizontal from 'lucide-svelte/icons/pencil-line';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	export let data: PageData;
</script>

<svelte:head>
	<title>Svelte Todo</title>
	<meta name="description" content="Svelte todo by dhimas ferdiansyah" />
</svelte:head>

<div class="min-h-screen bg-[#FBFBFB]">
	<div class="container mx-auto max-w-3xl px-4 py-32">
		<table class="min-w-full border border-gray-300 bg-white">
			<thead class="bg-gray-200">
				<tr>
					<th
						class="w-1/2 px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
						>Task</th
					>
					<th
						class="w-1/4 px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
						>Status</th
					>
					<th
						class="w-1/4 px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700"
						>Actions</th
					>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200">
				{#if data.todos.length > 0}
					{#each data.todos as todo (todo.id)}
						<tr class="hover:bg-gray-50">
							<td class="px-4 py-3">
								<span
									class="text-sm font-medium text-gray-900 {todo.completed
										? 'line-through'
										: ''} break-words"
								>
									{todo.title}
								</span>
							</td>
							<td class="px-4 py-3">
								<span
									class="inline-flex rounded-full px-2 text-xs font-semibold leading-5 {todo.completed
										? 'bg-green-100 text-green-800'
										: 'bg-yellow-100 text-yellow-800'}"
								>
									{todo.completed ? 'Completed' : 'Pending'}
								</span>
							</td>
							<td class="flex gap-6 px-4 py-3 text-sm text-gray-500">
								<form action="?/update" use:enhance method="POST">
									<input type="hidden" name="id" value={todo.id} />
									<input type="hidden" name="completed" value={todo.completed ? 'false' : 'true'} />
									<button
										type="submit"
										class=" text-gray-400 hover:text-gray-500"
										aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
									>
										<Check size={18} class={todo.completed ? 'text-green-500' : ''} />
									</button>
								</form>
								<a
									href={`/edit/${todo.id}`}
									class="text-gray-400 hover:text-gray-500"
									aria-label="More options"
								>
									<MoreHorizontal size={18} />
								</a>
								<form action="?/delete" use:enhance method="POST">
									<input type="hidden" name="id" value={todo.id} />
									<button
										type="submit"
										class=" text-gray-400 hover:text-gray-500"
										aria-label="Delete task"
									>
										<X size={18} />
									</button>
								</form>
							</td>
						</tr>
					{/each}
				{:else}
					<tr>
						<td class="px-4 py-3 text-center text-sm" colspan="3"> No tasks found </td>
					</tr>
				{/if}
			</tbody>
		</table>
	</div>
</div>
