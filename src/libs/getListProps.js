import { getSecrets } from "@mies-co/next-secrets";
import fs from "fs";
import matter from "gray-matter";

export const getListProps = async () => {
	// TODO fetch gists
	// const secrets = await getSecrets();

	const files = fs.readdirSync(`${process.cwd()}/src/posts`);

	const posts = files.map((filename) => {
		const markdownWithMetadata = fs.readFileSync(`src/posts/${filename}`).toString();

		const { data = {} } = matter(markdownWithMetadata);
		const { dateCreated, dateUpdated, ...rest } = data;

		const frontmatter = rest;

		if (dateCreated)
			frontmatter.dateCreated = dateCreated.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});

		if (dateUpdated)
			frontmatter.dateUpdated = dateUpdated.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});

		frontmatter.dateLast = dateUpdated ? frontmatter.dateUpdated : frontmatter.dateCreated;

		return {
			slug: filename.replace(".md", ""),
			frontmatter,
		};
	});

	return {
		props: {
			posts,
		},
	};
};

export default getListProps;
