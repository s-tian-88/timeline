import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
      files: ['**/*.js'],
      rules: {
          "no-undef": "off",
          "no-unused-vars": "off",
          "no-case-declarations": "off"
      }
  },
  {
      ignores: [
          "**/fontawesome-free-6.5.2-web/",
          "**/dist/",
          "**/.yarn",
          "**.pnp*"
      ]
  }
];
