import React from "react";
import lost from "./lost.png";

const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="four">
          <h1>404 Error - Page Not Found</h1>
          <img className="lostImg" src={lost} alt="Lost Character" />
          <p>Oops! It seems the page you are looking for doesn't exist.</p>

          <p>
            Please choose from the menu items above to get your search back on
            track.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
