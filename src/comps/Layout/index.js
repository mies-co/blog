import Link from "next/link";
import { useRouter } from "next/router";

import { LayoutWrapper } from "./_styled";

const Layout = (props) => {
	const { children } = props;
	return (
		<LayoutWrapper>
			<header>
				<h1>
					<Link href="/">
						<a>Mies.co Blog</a>
					</Link>
				</h1>
			</header>
			<main>{children}</main>
			<footer>
				© {new Date().getFullYear()}, Built with <a href="https://nextjs.org/">Next.js</a>{" "}
				&#128293;
			</footer>
		</LayoutWrapper>
	);
};

export default Layout;
