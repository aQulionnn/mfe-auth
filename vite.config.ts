import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { federation } from "@module-federation/vite";
import { dependencies } from "./package.json";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "auth",
            filename: "remoteEntry.js",
            exposes: {
                "./Auth": "./src/page/Auth.mount.tsx",
            },
            shared: {
                'react': {
                    requiredVersion: dependencies['react'],
                    singleton: true
                },
                "react-dom": {
                    requiredVersion: dependencies["react-dom"],
                    singleton: true,
                }
            },
            library: {
                type: "module"
            }
        }),
        cssInjectedByJsPlugin({
            jsAssetsFilterFunction: (outputChunk) => {
                return outputChunk.name === 'remoteEntry' ||
                    outputChunk.fileName.includes('remoteEntry');
            }
        })
    ],
    optimizeDeps: {
        exclude: ["@module-federation/vite"]
    },
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
        rollupOptions: {
            output: {
                assetFileNames() {
                    return "[name][extname]";
                },
            },
        }
    }
})