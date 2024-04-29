import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
      files: ["**/*.js"],
      languageOptions: {
          sourceType: "module",
          globals: globals.browser 
      }
  },

  {
      ignores: [
          "src/css/fontawesome-free-6.5.2-web/",
          "dist/",
          ".yarn/",
          ".pnp*"
      ]
  },

  pluginJs.configs.recommended,

];
