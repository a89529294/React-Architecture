import { selector } from "recoil";
import { counterState } from "./counterState";

export const numberOfClicksSelector = selector({
  key: "numberOfClicksSelector",
  get: ({ get }) => {
    const clicksData = get(counterState);
    return clicksData.reduce((acc, ele) => acc + ele.amount, 0);
  },
});
