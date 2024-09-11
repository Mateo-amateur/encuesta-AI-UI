import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact, { rules } from "eslint-plugin-react";


export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  { rules: { ...pluginJs.configs.recommended.rules, ...pluginReact.configs.flat.recommended.rules } },
  { rules: { ...pluginReact.configs.flat.rules } },
  { rules: { "react/react-in-jsx-scope": false } }
];