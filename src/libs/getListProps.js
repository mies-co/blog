import { getSecrets } from "@mies-co/next-secrets";
import fs from "fs";
import matter from "gray-matter";

import getFrontmatter from "./getFrontmatter";

export const getListProps = async () => {
	// TODO fetch gists
	// const secrets = await getSecrets();

	const files = fs.readdirSync(`${process.cwd()}/src/posts`);

	const posts = files.map((filename) => {
		const markdownWithMetadata = fs.readFileSync(`src/posts/${filename}`).toString();

		const { data = {} } = matter(markdownWithMetadata);
		const frontmatter = getFrontmatter(data);

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
