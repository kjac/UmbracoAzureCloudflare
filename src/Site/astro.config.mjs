import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";

// need to prevent Node.js from rejecting self-signed certificates in development mode - see .env.development
const { NODE_TLS_REJECT_UNAUTHORIZED } = loadEnv(process.env.NODE_ENV, process.cwd(), "");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = NODE_TLS_REJECT_UNAUTHORIZED;

// https://astro.build/config
export default defineConfig({
    output: 'static'
});
