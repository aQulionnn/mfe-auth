import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "Auth",
            filename: "remoteEntry.js",
            exposes: {
                "./Auth": "./src/page/Auth"
            },
            shared: ["react", "react-dom"],
            library: {
                type: "module"
            }
        })
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    }
})