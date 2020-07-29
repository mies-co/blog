const { withAnt } = require("@mies-co/next-ant");

const isProd = process.env.NODE_ENV === "production";

module.exports = withAnt({
	assetPrefix: isProd ? "/blog/" : "",
	ant: {
		theme: "./public/static/styles/theme.scss",
	},
});
