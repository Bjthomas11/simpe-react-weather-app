import React from "react";

const Container = ({ children, className }) => {
  return <main className={className}>{children}</main>;
};

export default Container;
