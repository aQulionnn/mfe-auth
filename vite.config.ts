import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from "@module-federation/vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

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
        }),
        cssInjectedByJsPlugin({
            jsAssetsFilterFunction: (outputChunk) =>
                outputChunk.fileName === 'remoteEntry.js'
        })
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    }
})