import { Button } from "./ui/button";

export default function Navbar() {
	return (
		<nav className="h-20 container mx-auto flex items-center">
			<h1 className="font-bold text-3xl">
				Yugz
				<span className="text-orange-400">.</span>
			</h1>
			{/* <div className="flex gap-2">
				<Button asChild>
					<a href="/">Home</a>
				</Button>

				<Button asChild>
					<a href="/blog">Blog</a>
				</Button>
			</div>
			<div className="bg-red-500 w-12 h-12">Logo</div> */}
		</nav>
	);
}
