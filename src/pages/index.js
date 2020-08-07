import { withSecrets } from "@mies-co/next-secrets";
import Link from "next/link";

import Layout from "_comps/Layout";

function Home(props) {
	const { posts } = props;
	return (
		<Layout>
			{posts.map(
				({
					frontmatter: { title, description, dateCreated, dateUpdated, dateLast },
					slug,
				}) => (
					<article key={slug}>
						<header>
							<h3>
								<Link href="/post/[slug]" as={`/post/${slug}`}>
									<a className="text-3xl font-semibold text-orange-600 no-underline">
										{title}
									</a>
								</Link>
							</h3>
							{dateLast && <span>Date: {dateLast}</span>}
						</header>
						<section>
							<p>{description}</p>
						</section>
					</article>
				)
			)}
		</Layout>
	);
}

export { getListProps as getStaticProps } from "_libs";
export default withSecrets(Home);
