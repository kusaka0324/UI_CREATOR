import { EditByCssAtom, IncludeButtonsAtom } from "../atoms";
import { selector } from "recoil";

export const SetButtonsStyle= selector({
	key: 'set-button-style',
	get: ({ get }) => {
		return get(IncludeButtonsAtom)
	},
	set: ({get, set}, newClass) => {
		const prevCodeByCss= get(EditByCssAtom) 

		set(EditByCssAtom, prevCodeByCss + newClass)
	}
});