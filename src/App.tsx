import React from "react";
import "./styles.css";
import logo from "../public/example.png";
const App = (): JSX.Element => {
  return (
    <>
      <h1>React TypeScript Webpack project</h1>
      {process.env.API_KEY} <br />
      {process.env.NODE_ENV} <br />
      {process.env.BASE_URL} <br />
      <img src={logo} alt="mountains" />
    </>
  );
};

export { App };
