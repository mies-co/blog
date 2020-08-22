import { withSecrets } from "@mies-co/next-secrets";
import Link from "next/link";
import styled from "styled-components";

import Layout from "_comps/Layout";

const DateLast = styled.div`
	font-size: 80%;
	color: ${theme.gray};
`;

function Home(props) {
	const { posts } = props;
	return (
		<Layout>
			{posts.map(
				({
					frontmatter: {
						title,
						subtitle,
						description,
						dateCreated,
						dateUpdated,
						dateLast,
						dateLastHuman,
					},
					slug,
				}) => (
					<article key={slug}>
						<header>
							<h3>
								<Link href="/post/[slug]" as={`/post/${slug}`}>
									<a>{title}</a>
								</Link>
							</h3>
						</header>
						<section style={{ marginLeft: "1rem" }}>
							{subtitle && (
								<>
									<h4>{subtitle}</h4>
								</>
							)}
							<DateLast>{dateLastHuman}</DateLast>
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
