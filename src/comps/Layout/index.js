import Link from "next/link";
import Head from "next/head";

import { LayoutWrapper } from "./_styled";

const Layout = (props) => {
	const { children, author, title, description, social, url, structured } = props;
	const pageTitle = `Mies - ${title}`;

	return (
		<LayoutWrapper>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={description} />

				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary" key="twcard" />
				{author.twitter && (
					<meta name="twitter:creator" content={`@${author.twitter}`} key="twhandle" />
				)}

				{/* Open Graph */}
				<meta property="og:url" content={url} key="ogurl" />
				<meta property="og:site_name" content={"Mies Blog"} key="ogsitename" />
				<meta property="og:title" content={pageTitle} key="ogtitle" />
				<meta property="og:description" content={description} key="ogdesc" />
				{social.image && <meta property="og:image" content={social.image} key="ogimage" />}

				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-KBJLS5DTHJ"
				></script>

				<script
					dangerouslySetInnerHTML={{
						__html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-KBJLS5DTHJ');
                        `,
					}}
				/>

				{structured && (
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(structured),
						}}
					/>
				)}
			</Head>
			<header>
				<h1>
					<Link href="/">
						<a>Mies.co blog</a>
					</Link>
				</h1>
			</header>
			<main>{children}</main>
			<footer style={{ marginTop: 64 }}>© {new Date().getFullYear()} mies &#128293;</footer>
		</LayoutWrapper>
	);
};

Layout.defaultProps = {
	author: {},
	social: {},
};

export default Layout;
