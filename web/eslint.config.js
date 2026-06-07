import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
    {
        ignores: ["node_modules/**", "dist/**", "build/**"],
    },
    ...tsPlugin.configs["flat/recommended"],
    react.configs.flat.recommended,
    reactHooks.configs.flat.recommended,
    {
        languageOptions: {
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                window: "readonly",
                document: "readonly",
                navigator: "readonly",
            },
        },
        settings: {
            react: {
                version: "18.2.0",
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
        },
    },
];
