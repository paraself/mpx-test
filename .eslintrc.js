module.exports = {
  extends: ['@mpxjs/eslint-config-ts'],
  rules: {
    // .mpx文件规则 https://mpx-ecology.github.io/eslint-plugin-mpx/rules/
  },
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        // .ts文件规则 https://typescript-eslint.io/rules/
        '@typescript-eslint/ban-ts-comment': 'off',
        'n/no-callback-literal': 'off',
        'no-mixed-operators': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/ban-types': 'off'
      }
    },
    {
      files: ['**/*.js'],
      rules: {
        // .js文件规则 https://eslint.bootcss.com/docs/rules/
      }
    },
    {
      files: ['**/*.mpx'],
      rules: {
        'no-mixed-operators': 'off',
        'mpx/valid-wx-key': 'off',
        'mpx/valid-attribute-value': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/issues/46
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }]
      }
    }
  ]
}
