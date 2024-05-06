import type { Config } from "jest";

const config: Config = {
  rootDir: "../../../../",
  roots: ["<rootDir>"],
  clearMocks: true,
  moduleDirectories: ["node_modules"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
};

export default config;
