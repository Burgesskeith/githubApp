import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Repos from "./Repos";
import Spinner from "../Layout/Spinner";
import GithubContext from "../../Context/Github/GithubContext";
import AlertContext from "../../Context/Alert/AlertContext";
import { Redirect } from "react-router-dom";

const User = (props) => {
  const { user, repos, getUserInfo, loading, resetUserInfo } =
    useContext(GithubContext);
  const { alert } = useContext(AlertContext);
  useEffect(() => {
    getUserInfo(props.match.params.id);
    return function () {
      resetUserInfo();
    };
  }, []);
  if (alert) {
    return <Redirect to="/" />;
  }

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <Link to="/" className="btn btn-light">
        Back to Home
      </Link>
      Hireable :{" "}
      {user.hireable ? (
        <i className="fas fa-check text-success"></i>
      ) : (
        <i className="fas fa-times-circle text-danger"></i>
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={user.avatar_url}
            className="round-img"
            alt={user.login}
            style={{ width: "200px" }}
          />
          <h2>{user.login}</h2>
          <p>Location : {user.location}</p>
        </div>
        <div>
          {user.bio && (
            <>
              <h3>Bio</h3>
              <p>{user.bio}</p>
            </>
          )}
          <a
            href={user.html_url}
            className="btn btn-dark my-1"
            target="_blank"
            rel="noreferrer"
          >
            Go to Github Profile
          </a>
          <ul>
            <li>
              <strong>Name :</strong> {user.name}
            </li>
            {user.company && (
              <li>
                <strong>Work :</strong> {user.company}
              </li>
            )}
            {user.blog && (
              <li>
                <strong>Website :</strong> {user.blog}
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers : {user.followers}</div>
        <div className="badge badge-success">Following : {user.following}</div>
        <div className="badge badge-light">
          Public Repos : {user.public_repos}
        </div>
        <div className="badge badge-primary">
          Public Gists : {user.public_gists}
        </div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default User;
