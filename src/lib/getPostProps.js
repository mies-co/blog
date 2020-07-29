import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPostProps = async ({ params: { slug } }) => {
	const markdownWithMetadata = fs.readFileSync(path.join("src/posts", `${slug}.md`)).toString();

	const { data = {}, content = "" } = matter(markdownWithMetadata);
	const { date, updatedAt, ...rest } = data;

	const frontmatter = rest;

	if (date) frontmatter.date = date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
	if (updatedAt) frontmatter.updatedAt = updatedAt.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

	return {
		props: {
			content: `# ${data.title}\n${content}`,
			frontmatter,
		},
	};
};

export default getPostProps;
