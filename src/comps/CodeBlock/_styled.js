import styled, { css } from "styled-components";

export const CodeWrapper = styled.div`
	position: relative;

	/* Code snippet */
	pre {
		padding-right: 2.4rem !important;
		${(props) => {
			let style = css`
				padding: 1rem 2.4rem !important;
			`;

			if (props.type === "large")
				style = css`
					padding: 2.4rem !important;
				`;

			return style;
		}}
	}
`;

export const CopyButton = styled.div`
	position: absolute;
	right: 0;
	cursor: pointer;
	padding: 0.8rem 0.8rem 0 0;

	/* Copy icon */
	svg {
		color: ${theme.secondaryColor};
		font-size: 1.4rem;
		outline: none;
		transition: all 0.3s ease-in-out;
	}

	&:hover svg {
		color: white;
		transition: all 0.3s ease-in-out;
	}
`;
