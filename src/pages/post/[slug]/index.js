import React from "react";
import matter from "gray-matter";

import ReactMarkdown from "react-markdown/with-html";

import Layout from "_comps/Layout";
import CodeBlock from "_comps/CodeBlock";

export default function Post({ content, frontmatter }) {
	const { dateCreated, dateUpdated } = frontmatter;
	return (
		<Layout>
			<article>
				<ReactMarkdown
					escapeHtml={false}
					source={content}
					renderers={{
						code: CodeBlock,
					}}
				/>
			</article>
		</Layout>
	);
}

export { getStaticPaths } from "_libs";
export { getPostProps as getStaticProps } from "_libs";
