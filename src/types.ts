import type { RenderedContent } from "astro:content";

export type PostType = {
	id: string;
	body?: string;
	collection: "blog";
	data: any;
	rendered?: RenderedContent;
	filePath?: string;
};
