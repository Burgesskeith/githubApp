import React, { Fragment, useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";
import GithubContext from "../../Context/Github/GithubContext";

const Users = () => {
  const { loading, users } = useContext(GithubContext);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className = "userListCols">
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    </Fragment>
  );
};

export default Users;
