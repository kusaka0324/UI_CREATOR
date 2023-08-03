import { selector } from "recoil";
import { EditByCssAtom, EditByHtmlAtom } from "../atoms";
import { defaultHtml } from "@/data";

export const MergeCodeSelector= selector({
	key: 'merge-html-css',
	get: ({get}) => {
		const htmlState= get(EditByHtmlAtom);
		const cssState = get(EditByCssAtom);
		const formattedHtml = defaultHtml.replace('<body></body>', `<body>\n${htmlState}</body>`)
		const insertIndex = formattedHtml.indexOf('</head>');
		const updatedHtmlString = formattedHtml.slice(0, insertIndex) + `<style>${cssState}</style>` + formattedHtml.slice(insertIndex);

		return updatedHtmlString;
	}
})