import App from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";

// const theme = {
// 	colors: {
// 		primary: "rgb(0, 128, 86)",
// 	},
// };

const GlobalStyle = createGlobalStyle`
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${theme.secondaryColor};
        opacity: 0.8;
    }

    a {
        color: ${theme.primaryColor};
    }

    p {
        color: ${theme.textColorDark};
    }
        
    code {
        display: inline-block;
        font-size: 95%;
    }

    :not(pre) >  code {
        padding: .1em .6em;
        margin: 0;
        font-size: 85%;
        background-color: rgba(27,31,35,.05);
        border-radius: 6px;
    }
`;

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		);
	}
}
