import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

installGlobals();

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      remix({
        ignoredRouteFiles: ["**/.*"],
        // appDirectory: "app",
        // assetsBuildDirectory: "public/build",
        // publicPath: "/build/",
        // serverBuildPath: "build/index.js",
      }),
    ],
  })
);
