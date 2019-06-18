import { types } from "./reducers";

export const useActions = (state, dispatch) => {
  function addIfNotInList(tech) {
    const techIndex = state.techs.indexOf(tech);
    if (techIndex !== -1) {
      alert("Tech is defined in list");
    } else {
      dispatch({ type: types.ADD, payload: tech });
    }
  }

  return {
    addIfNotInList
  };
};
