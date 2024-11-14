<script lang="ts">
	import '@fontsource-variable/inter';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>

<Header />
{@render children()}

<style>
	:global(body) {
		font-family: 'Inter Variable', sans-serif;
	}
</style>
