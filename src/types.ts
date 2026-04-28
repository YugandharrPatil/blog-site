import type { RenderedContent } from "astro:content";

export type PostType = {
	id: string;
	body?: string;
	collection: "blog";
	data: {
		title: string;
		slug: string;
		subtitle: string;
		tags: string[];
	};
	rendered?: RenderedContent;
	filePath?: string;
};
