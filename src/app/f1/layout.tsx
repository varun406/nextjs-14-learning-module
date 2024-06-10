import React from "react";

const Interceptinglayout = ({ children, modal }) => {
  return (
    <div>
      <h2>Intercepting Routing</h2>
      {children}
      {modal}
    </div>
  );
};

export default Interceptinglayout;
