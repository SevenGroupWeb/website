/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'heebo': ['Heebo']
		},
		colors: {
			amarillo: 'e2ac37',
			blanco: '#f1f1f1',
			negro: '#0e0e0e'
		},
		extend: {},
	},
	plugins: []
}
