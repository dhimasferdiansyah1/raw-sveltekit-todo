<script>
	import { page } from '$app/stores';

	let isMenuOpen = false;

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const closeMenu = () => {
		isMenuOpen = false; // Menutup menu
	};

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/done', label: 'Done' },
		{ href: '/add', label: 'Add' }
	];
</script>

<nav class="fixed w-full border-b border-b-gray-300 bg-white">
	<div class="mx-auto max-w-3xl px-4">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<a href="/" class="text-lg font-semibold text-gray-800">Svelte Todo</a>
			</div>
			<div class="hidden md:flex">
				{#each navItems as item}
					<a
						href={item.href}
						class="ml-8 text-sm text-gray-700 hover:text-gray-900 {$page.url.pathname === item.href
							? 'border-b-2 border-gray-900'
							: ''}"
					>
						{item.label}
					</a>
				{/each}
			</div>
			<div class="md:hidden">
				<button
					aria-label="toggleMenu"
					on:click={toggleMenu}
					class="text-gray-700 hover:text-gray-900"
				>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
	{#if isMenuOpen}
		<div class="md:hidden">
			<div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
				{#each navItems as item}
					<a
						on:click={closeMenu}
						href={item.href}
						class="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 {$page
							.url.pathname === item.href
							? 'bg-gray-50'
							: ''}"
					>
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
