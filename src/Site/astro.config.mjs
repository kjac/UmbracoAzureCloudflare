import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
import cloudflare from "@astrojs/cloudflare";
import node from "@astrojs/node";

const { NODE_TLS_REJECT_UNAUTHORIZED, USE_SSR, SSR_ADAPTER } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// need to prevent Node.js from rejecting self-signed certificates in development mode - see .env.development
process.env.NODE_TLS_REJECT_UNAUTHORIZED = NODE_TLS_REJECT_UNAUTHORIZED;

// construct the Astro config based on the configured environment variables
const config = {
  output: USE_SSR
      ? 'server'
      : 'static'
};
if (USE_SSR) {
  config.adapter = SSR_ADAPTER === 'Node'
      ? config.adapter = node({ mode: 'standalone' })
      : cloudflare();
}

// https://astro.build/config
export default defineConfig(config);