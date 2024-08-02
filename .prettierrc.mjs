// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: true,
  useTabs: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
