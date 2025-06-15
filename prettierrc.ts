import { type Config } from 'prettier';

const config: Config = {
    plugins: ["prettier-plugin-tailwindcss"],
    singleQuote: true,
    bracketSpacing: true,
    semi: true,
    arrowParens: 'avoid',
    printWidth: 120,
    bracketSameLine: false,
    trailingComma: 'all',
    tabWidth: 4,

};

export default config;