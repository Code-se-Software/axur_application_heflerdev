import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleDirectories: ["node_modules", "<rootDir>"],
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
    }

};
export default config;