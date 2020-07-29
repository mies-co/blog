import fs from "fs";

const getStaticPaths = async () => {
	const files = fs.readdirSync("src/posts");

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".md", ""),
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export default getStaticPaths;
