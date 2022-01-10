import { createStore } from "redux";

function reducer(state = { page: "HOME" }, action) {
    switch (action.type) {
      case "menuSelectPage":
        return {
          ...state,
          page: action.pageName,
        };
      default:
        return state;
    }
  }

const store = createStore(reducer);
export default store;