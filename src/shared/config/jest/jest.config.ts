import type { Config } from "jest";

const config: Config = {
  rootDir: "../../../../",
  roots: ["<rootDir>"],
  clearMocks: true,
  moduleDirectories: ["node_modules"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/shared/config/jest/setupTests.ts"],
  preset: "ts-jest",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/src/shared/config/jest/__mocks__/SvgrMock.tsx",
    "\\.s?css$": "<rootDir>/src/shared/config/jest/__mocks__/style.ts",
    "@/(.*)": "<rootDir>/src/$1",
  },
};

export default config;
