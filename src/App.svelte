<script>
	export let name;

	import { onMount } from 'svelte';

	let slider;

	onMount(() => {
		slider.direction = "vertical";
	});
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<img-comparison-slider value="70" bind:this={slider}>
		<img
				slot="first"
				style="width: 100%"
				src="https://img-comparison-slider.sneas.io/demo/images/before.webp"
		/>
		<img
				slot="second"
				style="width: 100%"
				src="https://img-comparison-slider.sneas.io/demo/images/after.webp"
		/>
	</img-comparison-slider>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
