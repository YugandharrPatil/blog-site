function getWordCount(markdown: string): number {
	return (
		markdown
			// remove markdown syntax (basic cleanup)
			.replace(/[#_*>\-\n]/g, " ")
			.replace(/\[(.*?)\]\(.*?\)/g, "$1") // links -> text
			.replace(/\s+/g, " ") // normalize spaces
			.trim()
			.split(" ")
			.filter(Boolean).length
	);
}

function calculateReadingTime(wordCount: number, wpm = 200) {
	const minutes = wordCount / wpm;
	return {
		minutes: Math.ceil(minutes),
		seconds: Math.ceil(minutes * 60),
	};
}

export function getWcAndReadingTime(markdown: string | undefined) {
	if (!markdown) return { wordCount: 0, readingTime: { minutes: 0, seconds: 0 } };
	const wordCount = getWordCount(markdown);
	const readingTime = calculateReadingTime(wordCount, 200);
	return { wordCount, readingTime };
}
