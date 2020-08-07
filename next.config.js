const { withAnt } = require("@mies-co/next-ant");
const withSecretsConfig = require("@mies-co/next-secrets/config");

module.exports = withSecretsConfig(
	withAnt({
		// Not required when using CNAME
		// assetPrefix: process.env.NODE_ENV === "production" ? "/blog/" : "",
		ant: {
			theme: "./public/static/styles/theme.scss",
		},
	})
);
