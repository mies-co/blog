const env = require("./env-config");

module.exports = {
	presets: ["next/babel"],
	plugins: [
		["transform-define", env],
		[
			"module-resolver",
			{
				root: ["./src"],
				alias: {
					_comps: "./src/comps",
					_libs: "./src/libs",
					_posts: "./src/posts",
				},
			},
		],
	],
};
