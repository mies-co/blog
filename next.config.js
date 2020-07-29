const { withAnt } = require("@mies-co/next-ant");

const isProd = process.env.NODE_ENV === "production";

module.exports = withAnt({
	// Not required when using CNAME
	// assetPrefix: isProd ? "/blog/" : "",
	ant: {
		theme: "./public/static/styles/theme.scss",
	},
});
