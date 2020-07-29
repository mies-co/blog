import Link from "next/link";
import { useRouter } from "next/router";

const Layout = (props) => {
	const { children } = props;
	return (
		<div className="max-w-screen-sm px-4 py-8 mx-auto">
			<header>
				<h1 className="mb-8">
					<Link href="/">
						<a className="text-6xl font-black text-black no-underline">Mies.co Blog</a>
					</Link>
				</h1>
			</header>
			<main>{children}</main>
			<footer>
				© {new Date().getFullYear()}, Built with <a href="https://nextjs.org/">Next.js</a> &#128293;
			</footer>
		</div>
	);
};

export default Layout;
