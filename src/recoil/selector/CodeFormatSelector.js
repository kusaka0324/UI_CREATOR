import { selector } from 'recoil';
import prettier     from 'prettier/standalone';
import parserHtml   from 'prettier/parser-html';
import parserCss    from 'prettier/parser-postcss';

import { EditByCssAtom, EditByHtmlAtom } from "../atoms";

export const HtmlFormatSelector= selector({
	key: 'code-format-html',
	get: ({get}) => {
		const prevHtmlState= get(EditByHtmlAtom);

		const formattedHtml = prettier.format(prevHtmlState, {
			parser    : "html",
			plugins   : [parserHtml],
			tabWidth  : 2,
			printWidth: 50,
			useTabs   : true,
		});
	
		return formattedHtml;
	},
})

export const CssFormatSelector= selector({
	key: 'code-format-css',
	get: ({get}) => {
		const prevCssState= get(EditByCssAtom);
		const formattedCss = prettier.format(prevCssState, {
			parser    : "css",
			plugins   : [parserCss],
			tabWidth  : 2,
			printWidth: 50,
			useTabs   : true,
		});
		
		return formattedCss;
	},
});