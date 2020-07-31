import { CopyOutlined } from "@ant-design/icons";
import * as React from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { CodeWrapper, CopyButton } from "./_styled";

const CodeBlock = (props) => {
	const [copied, setCopied] = React.useState();
	const { language, value = "" } = props;

	const numberOfLines = value.split("\n").length;
	let codeSnippetSize = "small";
	if (2 < numberOfLines) codeSnippetSize = "large";

	return (
		<CodeWrapper id="code-snippet" type={codeSnippetSize}>
			<CopyToClipboard text={value} onCopy={() => setCopied(true)}>
				<CopyButton>
					<CopyOutlined />
				</CopyButton>
			</CopyToClipboard>
			<SyntaxHighlighter language={language} style={nord}>
				{value}
			</SyntaxHighlighter>
		</CodeWrapper>
	);
};

CodeBlock.propTypes = {
	value: PropTypes.string.isRequired,
	language: PropTypes.string,
};

CodeBlock.defaultProps = {
	language: null,
};

export default CodeBlock;
