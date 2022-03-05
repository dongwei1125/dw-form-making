module.exports = {
  root: true,
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
  rules: {
    quotes: ['error', 'single'],
    'vue/no-mutating-props': 'off',
    'vue/no-template-shadow': 'off',
  },
}
