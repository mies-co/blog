import Typography from "typography";
import githubTheme from "typography-theme-github";

delete githubTheme.googleFonts;

githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
	"h1,h2,h3,h4,h5,h6": {
		marginTop: rhythm(1 / 2),
	},
	h1: {
		// fontWeight: 900,
		// letterSpacing: "-1px",
	},
});
githubTheme.scaleRatio = 5 / 2;

const typography = new Typography(githubTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
	typography.injectStyles();
}

export default typography;
