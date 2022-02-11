import {
  ALL_USERS,
  SET_LOADING,
  SET_USER,
  RESET_USER,
  RESET_LOADING,
} from "../types";
const githubReducer = (state, action) => {
  switch (action.type) {
    case ALL_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case RESET_USER:
      return {
        ...state,
        user: {},
        repos: [],
      };
    case RESET_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      throw Error("State Logic Error");
  }
};

export default githubReducer;
