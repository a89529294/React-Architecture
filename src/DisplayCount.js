import { useRecoilValue } from "recoil";
import { numberOfClicksSelector } from "./numberOfClicksSelector";

export const DisplayCount = () => {
  const numberOfClicks = useRecoilValue(numberOfClicksSelector);
  return <h2>Number of clicks: {numberOfClicks}</h2>;
};
