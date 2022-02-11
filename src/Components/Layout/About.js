import React, { useState, useEffect, useRef, useReducer } from "react";

const About = () => {
  return (
    <div className="Container">
      <h1>About this Application</h1>
      <p>
        The purpose of this application is to demonstrate the use of React and
        manging React state using Context API
      </p>
      <p>
        It's also uses captures data from external sources via publicly
        available API's.
      </p>
      <p>
        Github offers access to user information via their API's so this is a
        great place to practice.
      </p>
      <p>Data is collected from the Github API using asynchronous queries.</p>
      <p>Please use the above menu to navigate the app.</p>
    </div>
  );
};

export default About;
