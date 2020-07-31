import Link from "next/link";

import Layout from "../comps/Layout";

function Home(props) {
	const { posts } = props;
	return (
		<Layout>
			{posts.map(({ frontmatter: { title, description, date }, slug }) => (
				<article key={slug}>
					<header>
						<h3>
							<Link href="/post/[slug]" as={`/post/${slug}`}>
								<a className="text-3xl font-semibold text-orange-600 no-underline">
									{title}
								</a>
							</Link>
						</h3>
						<span>{date}</span>
					</header>
					<section>
						<p>{description}</p>
					</section>
				</article>
			))}
		</Layout>
	);
}

export { getListProps as getStaticProps } from "../libs";

export default Home;
