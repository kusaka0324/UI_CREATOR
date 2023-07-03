import { selector } from "recoil";
import { EditByCssAtom, EditByHtmlAtom } from "../atoms";

export const MergeCodeSelector= selector({
  key: 'merge-html-css',
	get: ({get}) => {
		const htmlState= get(EditByHtmlAtom);
		const cssState = get(EditByCssAtom);
		const insertIndex = htmlState.indexOf('</head>');
		const updatedHtmlString = htmlState.slice(0, insertIndex) + `<style>${cssState}</style>` + htmlState.slice(insertIndex);

		return updatedHtmlString;
	}
})