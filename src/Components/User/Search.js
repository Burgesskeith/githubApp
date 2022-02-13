import React, { useState, useContext } from "react";
import GithubContext from "../../Context/Github/GithubContext";
import AlertContext from "../../Context/Alert/AlertContext";

const Search = () => {
  const { searchUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("danger", "Enter a valid search String");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="searchContainer">
          <div className="searchBox">
            <input
              type="text"
              onChange={handleChange}
              value={text}
              placeholder="Enter your search here"
            />
          </div>
          <div>
            <input type="submit" className="btn btn-dark btn-block" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
