import React from "react";
import Head from "next/head";
import matter from "gray-matter";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown/with-html";
import styled from "styled-components";

import Layout from "_comps/Layout";
import CodeBlock from "_comps/CodeBlock";

import {
	TwitterShareButton,
	TwitterIcon,
	LinkedinShareButton,
	LinkedinIcon,
	RedditShareButton,
	RedditIcon,
} from "react-share";

const LastPublished = styled.div`
	float: right;
	font-size: 80%;
    position: relative;
    z-index: 10;
    text-align: right;
`;

const ShareButtons = styled.div`
	position: fixed;
	left: 0.5rem;
	display: flex;
	flex-direction: column;
	top: 0.8rem;
`;

export default function Post({ content, frontmatter }) {
	const {
		dateCreated,
		dateUpdated,
		dateLastHuman,
		dateLast,
		title,
		description,
		author,
		social,
		tags,
	} = frontmatter;

	const router = useRouter();
	const { href: url, host } = new URL(router.asPath, process.env.NEXT_PUBLIC_APP_URL);
	social.image = new URL(social.image, process.env.NEXT_PUBLIC_APP_URL).href;

	return (
		<Layout
			author={author}
			url={url}
			social={social}
			title={title}
			description={description}
			structured={{
				"@context": "https://schema.org",
				"@type": "BlogPosting",
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": url,
				},
				headline: title,
				image: [social.image],
				datePublished: dateCreated,
				dateModified: dateUpdated,
				author: {
					"@type": "Person",
					name: `${author.firstname || ""} ${author.lastname || ""}`,
				},
				publisher: {
					"@type": "Organization",
					name: "Mies",
					logo: {
						"@type": "ImageObject",
						url: "https://www.mies.co/static/mies-logo-2000x1000.png",
					},
				},
			}}
		>
			<LastPublished>
				Last published on {frontmatter.dateLastHuman}
				<br />
				by{" "}
				<a href={`https://twitter.com/${author.twitter}`}>
					{author.firstname} {author.lastname}
				</a>
			</LastPublished>
			<ShareButtons>
				<TwitterShareButton
					url={url}
					title={description}
					via={author.twitter}
					hashtags={tags}
					related={[author.twitter]}
				>
					<TwitterIcon size={32} round />
				</TwitterShareButton>
				<LinkedinShareButton url={url} title={title} summary={description} source={host}>
					<LinkedinIcon size={32} round />
				</LinkedinShareButton>
				<RedditShareButton url={url} title={description}>
					<RedditIcon size={32} round />
				</RedditShareButton>
			</ShareButtons>
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
