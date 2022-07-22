import App from './App.svelte';
import 'img-comparison-slider';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
