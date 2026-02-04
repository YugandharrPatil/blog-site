import { Button } from "./ui/button";

export default function Navbar() {
	return (
		<nav className="flex h-20 items-center justify-between">
			<div className="bg-red-500 w-12 h-12">Logo</div>
			<div className="flex gap-2">
				<Button asChild>
					<a href="/">Home</a>
				</Button>

				<Button asChild>
					<a href="/blog">Blog</a>
				</Button>
			</div>
			<div className="bg-red-500 w-12 h-12">Logo</div>
		</nav>
	);
}
