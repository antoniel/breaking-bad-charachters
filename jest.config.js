module.exports = {
  moduleNameMapper: {
    "@/components/*": "<rootDir>/components",
    "@/api/*": "<rootDir>/api/index.ts",
    "@/types/*": "<rootDir>/types",
    "@/hooks/*": "<rootDir>/hooks",
    "@/utils/*": "<rootDir>/utils",
    "@/styles/*": "<rootDir>/styles",
  },
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setup.ts"],
  collectCoverage: true,
  moduleDirectories: ["node_modules", "<rootDir>"],
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/.next/**",
  ],
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: [".next/", "/node_modules/", "/coverage/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
};
