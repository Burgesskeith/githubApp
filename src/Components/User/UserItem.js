import React from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  return (
    <div className="card text-center bg-#f2f2f2">
      <img
        src={props.user.avatar_url}
        style={{ width: "150px" }}
        alt="User Img"
        className="round-img"
      />
      <h3>{props.user.login}</h3>
      <div>
        <Link
          to={`/user/${props.user.login}`}
          className="btn btn-dark btn-sm my-1"
        >
          Github Profile
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
