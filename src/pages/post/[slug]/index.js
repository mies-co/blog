import React from "react";
import matter from "gray-matter";

import ReactMarkdown from "react-markdown/with-html";

import Layout from "../../../comps/Layout";
import CodeBlock from "../../../comps/CodeBlock";

export default function Post({ content, frontmatter }) {
	return (
		<Layout>
			<article>
				<ReactMarkdown
					escapeHtml={false}
					source={content}
					renderers={{ code: CodeBlock }}
				/>
			</article>
		</Layout>
	);
}

export { getStaticPaths } from "../../../libs";
export { getPostProps as getStaticProps } from "../../../libs";
