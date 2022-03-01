import Data from "../../data.json";
import all from "../../images/2.png";

export function setTagsAction() {
  return (dispatch) => {
    let { brands } = Data;
    let resTags = brands.map((item) => item.tags.map((tag) => tag));
    //   let tags = [].concat(...resTags);
    let tags = resTags.flat(); //ES10
    let uniqueArr = [];
    let unique = tags.filter((element) => {
      const isDuplicate = uniqueArr.includes(element.name);
      if (!isDuplicate) {
        uniqueArr.push(element.name);
        return true;
      }
    });

    let tagsSet = [
      {
        name: "All",
        image: all,
      },
      ...unique,
    ];

    dispatch({ type: "SETTAGS", payload: tagsSet });
  };
}
