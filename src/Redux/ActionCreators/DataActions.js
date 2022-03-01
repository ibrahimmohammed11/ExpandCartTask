export function setData(data) {
  return function (dispatch) {
    dispatch({ type: "SETDATA", payload: data });
  };
}
