// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	prefetch: true,
	integrations: [
		mdx(),
		react(),
		icon({
			include: {
				lucide: ["chevron-left"],
				"fa6-brands": ["twitter", "instagram", "github"],
				"fa6-regular": ["envelope"],
			},
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
	devToolbar: {
		enabled: false,
	},
});
