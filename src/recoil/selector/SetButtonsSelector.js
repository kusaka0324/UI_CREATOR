import { ScreenStateAtom } from "../atoms";
import { selector } from "recoil";

export const SetButtons= selector({
	key: 'set-button',
	get: ({ get }) => {
		
		return setButtons;
	}
});