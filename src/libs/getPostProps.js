import { getSecrets } from "@mies-co/next-secrets";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPostProps = async ({ params: { slug } }) => {
	// TODO fetch gists
	// const secrets = await getSecrets();

	const markdownWithMetadata = fs.readFileSync(path.join("src/posts", `${slug}.md`)).toString();

	const { data = {}, content = "" } = matter(markdownWithMetadata);
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
	const dc = dateCreated ? `Created on: ${frontmatter.dateCreated}` : "";
	const du = dateUpdated ? `Updated on: ${frontmatter.dateUpdated}` : "";

	return {
		props: {
			content: `# ${data.title}\n${dc}. ${du}.\n${content}`,
			frontmatter,
		},
	};
};

export default getPostProps;
