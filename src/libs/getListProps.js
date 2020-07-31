import fs from "fs";
import matter from "gray-matter";

export const getListProps = async () => {
	const files = fs.readdirSync(`${process.cwd()}/src/posts`);

	const posts = files.map((filename) => {
		const markdownWithMetadata = fs.readFileSync(`src/posts/${filename}`).toString();

		const { data = {} } = matter(markdownWithMetadata);
		const { date, updatedAt, ...rest } = data;

		const frontmatter = rest;

		if (date)
			frontmatter.date = date.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});

		if (updatedAt)
			frontmatter.updatedAt = updatedAt.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});

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
