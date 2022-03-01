let initialStore = {
  brandsTags: [],
};

export default function SetTagsReducer(prevState = initialStore, action) {
  switch (action.type) {
    case "SETTAGS":
      return { ...prevState, brandsTags: action.payload };
      break;
    default:
      return prevState;
      break;
  }
}
