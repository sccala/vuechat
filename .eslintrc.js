module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/prettier',
        'plugin:vue/base',
    ],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2018,
    },
    rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-unused-vars': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/no-parsing-error': [
            2,
            {
                'invalid-first-character-of-tag-name': false,
            },
        ],
    },
}
