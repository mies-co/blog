const { withAnt } = require("@mies-co/next-ant");
const withSecretsConfig = require("@mies-co/next-secrets/config");

if (process.env.NODE_ENV !== "production") {
	process.env.NEXT_PUBLIC_APP_URL = "http://localhost:3000";
}

module.exports = withSecretsConfig(
	withAnt({
		// Not required when using CNAME
		// assetPrefix: process.env.NODE_ENV === "production" ? "/blog/" : "",
		ant: {
			theme: "./public/static/styles/theme.scss",
		},
	})
);
