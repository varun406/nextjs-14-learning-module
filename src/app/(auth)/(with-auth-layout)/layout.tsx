import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Inside withAuthLayout</p>
      {children}
    </div>
  );
};

export default layout;
