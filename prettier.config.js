/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
	plugins: ["prettier-plugin-tailwindcss"],
	arrowParens: "always",
	bracketSameLine: false,
	bracketSpacing: true,
	semi: true,
	experimentalTernaries: false,
	singleQuote: false,
	jsxSingleQuote: false,
	quoteProps: "as-needed",
	trailingComma: "all",
	singleAttributePerLine: false,
	htmlWhitespaceSensitivity: "css",
	vueIndentScriptAndStyle: false,
	proseWrap: "preserve",
	insertPragma: false,
	printWidth: 150,
	requirePragma: false,
	tabWidth: 2,
	useTabs: true,
	embeddedLanguageFormatting: "auto",
	overrides: [
		{
			files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
			options: {
				bracketSameLine: false,
			},
		},
	],
};

export default config;
