import React from "react";
import matter from "gray-matter";

import ReactMarkdown from "react-markdown/with-html";

import Layout from "../../../comps/Layout";

export default function Post({ content, frontmatter }) {
	return (
		<Layout>
			<article>
				<ReactMarkdown escapeHtml={false} source={content} />
			</article>
		</Layout>
	);
}

export { getStaticPaths } from "../../../lib";
export { getPostProps as getStaticProps } from "../../../lib";
