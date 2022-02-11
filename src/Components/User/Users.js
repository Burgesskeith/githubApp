import React, { Fragment, useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";
import GithubContext from "../../Context/Github/GithubContext";

const Users = () => {
  const { loading, users } = useContext(GithubContext);
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "1rem",
    marginBottom: "50px"
  };

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    </Fragment>
  );
};

export default Users;
