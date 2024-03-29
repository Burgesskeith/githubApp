import React, { useReducer, useContext } from "react";
import githubReducer from "./GithubReducer";
import axios from "axios";
import {
  ALL_USERS,
  SET_LOADING,
  SET_USER,
  RESET_USER,
  RESET_LOADING,
} from "../types";
import GithubContext from "./GithubContext";
import AlertContext from "../Alert/AlertContext";

const GithubState = (props) => {
  const { setAlert } = useContext(AlertContext);
  const initialState = {
    users: [],
    loading: true,
    user: {},
    repos: [],
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const getAllUsers = () => {
    axios
      .get("https://api.github.com/users")
      .then((res) => {
        dispatch({ type: ALL_USERS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: RESET_LOADING });
        setAlert("danger", " Error in fetching data , Please try again");
      });
  };
  const searchUsers = async (query) => {
    try {
      dispatch({ type: SET_LOADING });
      if (query === " ") {
        throw new Error(" Enter a valid Username");
      }
      let res = await axios.get(
        `https://api.github.com/search/users?q=${query}`
      );
      dispatch({ type: ALL_USERS, payload: res.data.items });
    } catch (error) {
      dispatch({ type: RESET_LOADING });
      setAlert("danger", " Please Enter a valid Github Username");
    }
  };

  const getUserInfo = async (username) => {
    try {
      dispatch({ type: SET_LOADING });
      let user = await axios.get(`https://api.github.com/users/${username}`);
      let repos = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      dispatch({
        type: SET_USER,
        payload: { user: user.data, repos: repos.data },
      });
    } catch (error) {
      dispatch({ type: RESET_LOADING });
      setAlert(
        "danger",
        " Error fetching user information, Please use a valid user name"
      );
    }
  };

  const resetUserInfo = () => {
    dispatch({ type: RESET_USER });
  };

  return (
    <GithubContext.Provider
      value={{ ...state, getAllUsers, searchUsers, getUserInfo, resetUserInfo }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
