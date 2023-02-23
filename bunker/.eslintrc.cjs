/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
   
  ],
  rules: {
    // override/add rules settings here, such as:
    // "vue/no-unused-vars": "error",
    
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
 
};
