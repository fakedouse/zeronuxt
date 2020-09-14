module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        jest: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended',
        'plugin:jest/recommended'
    ],
    plugins: ['prettier', 'babel', 'jest'],
    // add your custom rules here
    rules: {}
}
