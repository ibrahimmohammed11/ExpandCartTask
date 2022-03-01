import Data from "../../data.json";
let { brands } = Data;

let initialStore = {
  brandsData: brands,
};

export function DataReducer(prevState = initialStore, action) {
  switch (action.type) {
    case "SETDATA":
      return { ...prevState, brandsData: action.payload };
      break;
    case "SEARCHFILTER":
      return { ...prevState, brandsData: action.payload };
      break;
    case "TAGFILTER":
      return { ...prevState, brandsData: action.payload };
      break;
    default:
      return prevState;
      break;
  }
}
