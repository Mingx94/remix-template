import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [UnoCSS(), tsconfigPaths()],
});
