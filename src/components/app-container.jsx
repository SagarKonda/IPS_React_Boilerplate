import React from "react";
import ErrorContainer from "../containers/error";

const AppContainer = ({ children }) => (
  <>
    <ErrorContainer />
    <div>Header Goes Here</div>
    <div>{children}</div>
    <div>Footer Goes Here</div>
  </>
);

export default AppContainer;