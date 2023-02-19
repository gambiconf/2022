import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    paths: {
      base: '/2022'
    },
    adapter: staticAdapter({
      fallback: 'index.html'
    }),
    prerender: { entries: [] }
  },
};

export default config;
