import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Components/Button/Button.jsx",
      },
    }),
  ],
});
