import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
import cloudflare from "@astrojs/cloudflare";

const { NODE_TLS_REJECT_UNAUTHORIZED, USE_SSR} = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// need to prevent Node.js from rejecting self-signed certificates in development mode - see .env.development
process.env.NODE_TLS_REJECT_UNAUTHORIZED = NODE_TLS_REJECT_UNAUTHORIZED;

// construct the Astro config based on the configured environment variables
const config = USE_SSR
  ? {
      output: 'server',
      adapter: cloudflare()
  }
  : {
    output: 'static'
  };

// https://astro.build/config
export default defineConfig(config);