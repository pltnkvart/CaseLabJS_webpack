import React from "react";
import "./styles.css";
const App = (): JSX.Element => {
  return (
    <>
      {process.env.NODE_ENV} <br />
      {process.env.BASE_URL}
    </>
  );
};

export { App };
