import Link from "next/link";

import Layout from "../comps/Layout";

function Home(props) {
	const { posts } = props;
	return (
		<Layout>
			{posts.map(({ frontmatter: { title, description, date }, slug }) => (
				<article key={slug}>
					<header>
						<h3 className="mb-2">
							<Link href={`/post/[slug]`} as={`${process.env.BACKEND_URL}/post/${slug}`}>
								<a className="text-3xl font-semibold text-orange-600 no-underline">{title}</a>
							</Link>
						</h3>
						<span className="mb-4 text-xs">{date}</span>
					</header>
					<section>
						<p className="mb-8">{description}</p>
					</section>
				</article>
			))}
		</Layout>
	);
}

export { getListProps as getStaticProps } from "../lib";

export default Home;
