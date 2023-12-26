import React from "react";
import "./styles.css";
import testImage from "@img/example1.png"

const App = (): JSX.Element => {
  return (
    <>
      <h1>React TypeScript Webpack project</h1>
      {process.env.API_KEY} <br />
      {process.env.NODE_ENV} <br />
      {process.env.BASE_URL} <br />
      <img src={testImage}/>
    </>
  );
};

export { App };
