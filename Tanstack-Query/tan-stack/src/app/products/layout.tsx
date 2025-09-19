import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>header</p>
      {children}
      <p>footer</p>
    </div>
  );
};

export default layout;
