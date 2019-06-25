import React from "react";
import ErrorContainer from "../containers/error";

// eslint-disable-next-line react/prop-types
const AppContainer = ({ children }) => (
  <>
    <ErrorContainer />
    <div>Header Goes Here</div>
    <div>{children}</div>
    <div>Footer Goes Here</div>
  </>
);

export default AppContainer;
