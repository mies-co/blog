import { getSecrets } from "@mies-co/next-secrets";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";

import getFrontmatter from "./getFrontmatter";

const getPostProps = async ({ params: { slug } }) => {
	// TODO fetch gists
	// const secrets = await getSecrets();

	const markdownWithMetadata = fs.readFileSync(path.join("src/posts", `${slug}.md`)).toString();

	const { data = {}, content = "" } = matter(markdownWithMetadata);
	const { dateCreated, dateUpdated, ...rest } = data;
	const frontmatter = getFrontmatter(data);

	return {
		props: {
			content: `# ${data.title}\n${content}`,
			frontmatter,
		},
	};
};

export default getPostProps;
