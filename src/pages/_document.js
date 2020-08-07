import { withStyledDocument } from "@mies-co/next-styled-components";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { TypographyStyle } from "react-typography";

import typography from "_libs/typography";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<TypographyStyle typography={typography} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default withStyledDocument(MyDocument);
