import antfu from '@antfu/eslint-config'

export default antfu({
    stylistic: {
        indent: 4,
        quotes: 'single',
    },
    vue: {
        overrides: {
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: 1,
                    multiline: 1,
                },
            ],
            'vue/block-order': [
                'error',
                {
                    order: ['style', 'template', 'script'],
                },
            ],
        },
    },
    typescript: true,
}, {}, {
    rules: {
        'ts/ban-ts-comment': 'warn',
        'ts/consistent-type-definitions': 'off',
        'ts/no-unsafe-function-type': 'off',
        'ts/no-empty-object-type': 'off',
        'symbol-description': 'off',
        'no-console': 'warn',
        'style/max-statements-per-line': ['error', { max: 2 }],
        'vue/html-closing-bracket-spacing': ['error', {
            startTag: 'never',
            endTag: 'never',
            selfClosingTag: 'never',
        }],
        'unicorn/prefer-number-properties': 'off',
        'style/brace-style': ['error', '1tbs', { allowSingleLine: false }],
        'import/first': 'off',
        'style/quote-props': 'off',
    },
})
