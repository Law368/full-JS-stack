module.exports = {
    extends: ["stylelint-config-standard",
              "stylelint-config-rational-order",
              "stylelint-prettier/recommended",
              "stylelint-config-prettier-scss"],
    plugins: ["stylelint-order", "stylelint-scss"],
    rules: {
      "selector-class-pattern": "off",
    }
  };