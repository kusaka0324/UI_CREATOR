import { selectorFamily } from "recoil";
import { SelectedButtonsState } from "../atoms";

export const SelectedItemSelector= selectorFamily({
  key: "listJobItem",
  get: index => ({ get }) => {
    return get(SelectedButtonsState)[index];
  },
  set: index => ({ get, set }, newValue) => {
    const listValue = get(SelectedButtonsState);
    set(
      SelectedButtonsState,
      listValue.map((item, i) =>
        i === index ? { ...item, selected: newValue } : item
      )
    );
  }
});