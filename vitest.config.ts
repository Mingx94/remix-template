import { loadEnv } from "vite";
import viteConfig from "./vite.config";
import { defineConfig, mergeConfig } from "vitest/config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
			include: ['app/**/*.{test,spec}.{js,jsx,ts,tsx}'],
			globals: true,
			environment: 'jsdom',
			setupFiles: ['./vitest.setup.ts'],
      // Additionally, this is to load ".env.test" during vitest
      env: loadEnv("test", process.cwd(), ""),
    },
  })
);
