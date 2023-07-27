import { selector } from 'recoil';
import prettier     from 'prettier/standalone';
import parserHtml   from 'prettier/parser-html';
import parserCss    from 'prettier/parser-postcss';

import { EditByCssAtom, EditByHtmlAtom } from "../atoms";
import { AddedClass, AddedTags } from './ModifyCodeSelector';
import {  defaultHtml } from '@/data';

export const HtmlFormatSelector= selector({
	key: 'code-format-html',
	get: ({get}) => {
		const addTags= get(AddedTags);
		const defaultHtml= get(EditByHtmlAtom);
		
			const formattedHtml = prettier.format(addTags, {
				parser    : "html",
				plugins   : [ parserHtml ],
				tabWidth  : 2,
				printWidth: 200,
				useTabs   : false,
				jsxBracketSameLine: false,
			});

			return formattedHtml;			
	},
	set: ({set}, newHtmlState) => {
		set(EditByHtmlAtom, newHtmlState.replace(defaultHtml,'').replace('<body></body>', `<body>${newHtmlState}</body>`));
	}
})

export const CssFormatSelector= selector({
	key: 'code-format-css',
	get: ({get}) => {
		const addedClasses= get(AddedClass);
		const prevCssState= get(EditByCssAtom);

		// try {
		// 	const formattedCssWithCursor= prettier.formatWithCursor(prevCssState, {
		// 		parser    : "css",
		// 		plugins   : [parserCss],
		// 		tabWidth  : 2,
		// 		printWidth: 200,
		// 		useTabs   : false,
		// 		cursorOffset: prevCssState.indexFromPos(prevCssState.getCursor())
		// 	});
		
		// 	return formattedCssWithCursor;			
		// }
		// catch(error) {
			return prevCssState;
		// }
	},
	set: ({set}, newCssState) => {
		set(EditByCssAtom, newCssState);
	}
});