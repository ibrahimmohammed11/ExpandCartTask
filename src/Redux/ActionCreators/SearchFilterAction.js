import Data from "../../data.json";
let { brands } = Data;

export function SearchFilterAction(e) {
  let val = e.target.value;
  let FilteredRest = brands.filter((item) =>
    item.name.toUpperCase().includes(val.toUpperCase())
  );
  return (dispatch) => {
    dispatch({ type: "SEARCHFILTER", payload: FilteredRest });
  };
}

export function handleTagsFilter(category) {
  if (category === "All") {
    return (dispatch) => {
      dispatch({ type: "TAGFILTER", payload: brands });
    };
  } else {
    let resTags = brands.filter((item) =>
      item.tags.some((tag) => tag["name"] === category)
    );
    return (dispatch) => {
      dispatch({ type: "TAGFILTER", payload: resTags });
    };
  }
}
