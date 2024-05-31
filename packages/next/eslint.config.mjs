import js from "@eslint/js";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintConfigPrettier from "eslint-config-prettier";
import tsEsLint from "typescript-eslint";
import unusedImports from "eslint-plugin-unused-imports";

export default tsEsLint.config(
	js.configs.recommended,
	eslintConfigPrettier,
	{
		plugins: {
			unicorn: eslintPluginUnicorn,
			"unused-imports": unusedImports,
		},
		rules: {
			"arrow-body-style": ["error", "as-needed"],
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"warn",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
				},
			],
			"no-multiple-empty-lines": "error",
			"no-nested-ternary": "error",
			"no-unused-vars": "off",
			"object-curly-spacing": ["error", "always"],
		},
	},
	...tsEsLint.configs.recommended
);
