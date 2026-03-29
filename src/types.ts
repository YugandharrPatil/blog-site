import type { RenderedContent } from "astro:content";

export type TagsType = "tech" | "hardware" | "philosophy";

export type PostType = {
	id: string;
	body?: string;
	collection: "blog";
	data: {
		title: string;
		subtitle: string;
		length: number;
		tags: TagsType[];
	};
	rendered?: RenderedContent;
	filePath?: string;
};
