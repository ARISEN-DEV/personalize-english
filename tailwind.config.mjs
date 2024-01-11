/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'darkgreen': '#386641',
				'lightgreen': '#6A994E',
				'lightergreen': '#A7C957',
				'greige': '#F2E8CF',
				'bordo': '#BC4749',
				'marron': '#936639'
			},
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
