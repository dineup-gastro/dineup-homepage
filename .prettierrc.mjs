/** @type {import("prettier").Config} */
export default {
	semi: false,
	singleQuote: false,
	printWidth: 120,
	tabWidth: 4,
	trailingComma: "all",
	arrowParens: "always",
	useTabs: true,
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
}
