/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				background: "rgba(var(--color-background) / <alpha-value>)",
				foreground: "rgba(var(--color-foreground) / <alpha-value>)",
				accent: "rgba(var(--color-accent) / <alpha-value>)",
			},
		},
	},
	plugins: [],
}
