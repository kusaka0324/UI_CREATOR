import React from "react";
import { selector } from "recoil";
import { EditByCssAtom, EditByHtmlAtom } from "../atoms";
import prettier        from 'prettier/standalone';
import parserHtml      from 'prettier/parser-html';
import parserCss       from 'prettier/parser-css';

export const HtmlFormatSelector= selector({
	key: 'code-format-html',
	get: ({get}) => {
		const [codeByHtml, setCodeByHtml] = React.useState(get(EditByHtmlAtom));
		
		const formattedCode = prettier.format(codeByHtml, {
			parser    : 'html',
			plugins   : [parserHtml],
			tabWidth  : 2,
			printWidth: 50,
			useTabs   : true
		});
		setCodeByHtml(formattedCode);

		return codeByHtml;
	}
})

export const CssFormatSelector= selector({
	key: 'code-format-css',
	get: ({get}) => {
		const [codeByCss, setCodeByCss] = React.useState(get(EditByCssAtom));

		const formattedCode = prettier.format(codeByCss, {
			parser    : 'css',
			plugins   : [parserCss],
			tabWidth  : 2,
			printWidth: 50,
			useTabs   : true,
		});
		setCodeByCss(formattedCode);

		return codeByCss;
	}
});