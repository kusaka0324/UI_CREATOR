import { selector } from 'recoil';
import prettier     from 'prettier/standalone';
import parserHtml   from 'prettier/parser-html';
import parserCss    from 'prettier/parser-postcss';

import { EditByCssAtom, EditByHtmlAtom } from "../atoms";
import { DroppedAddClass, DroppedAddTags } from './DroppedModifyCodeSelector';

export const HtmlFormatSelector= selector({
	key: 'code-format-html',
	get: ({get}) => {
		const prevHtmlState= get(DroppedAddTags);
	
			const formattedHtml = prettier.format(prevHtmlState, {
				parser    : "html",
				plugins   : [parserHtml],
				tabWidth  : 2,
				printWidth: 200,
				useTabs   : false,
				jsxBracketSameLine: false,
			});

			return formattedHtml;			
	},
	set: ({set}, newHtmlState) => {
		set(EditByHtmlAtom, newHtmlState)
	}
})

export const CssFormatSelector= selector({
	key: 'code-format-css',
	get: ({get}) => {
		const addedClasses= get(DroppedAddClass);
		const prevCssState= get(EditByCssAtom);

		let newCssState= addedClasses;
		try {
			const formattedCss = prettier.format(newCssState, {
				parser    : "css",
				plugins   : [parserCss],
				tabWidth  : 2,
				printWidth: 200,
				useTabs   : false,
			});
			return formattedCss;			
		}
		catch(error) {
			console.log('error');
		}
	},
	set: ({set}, newCssState) => {
		set(EditByCssAtom, newCssState)
	}
});