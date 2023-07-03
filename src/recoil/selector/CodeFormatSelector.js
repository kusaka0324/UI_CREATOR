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
			printWidth: 50,
			useTabs   : true,
		});

		return formattedHtml;
	},
})

export const CssFormatSelector= selector({
	key: 'code-format-css',
	get: ({get}) => {
		const prevCssState= get(DroppedAddClass);
		try {
			const formattedCss = prettier.format(prevCssState, {
				parser    : "css",
				plugins   : [parserCss],
				tabWidth  : 2,
				printWidth: 50,
				useTabs   : false,
			});
			
			return formattedCss;			
		}
		catch(error) {
			console.log('error');
		}
		finally {
			return prevCssState;
		}
	},
	set: ({set}, newCssState) => {
		set(EditByCssAtom, newCssState)
	}
});