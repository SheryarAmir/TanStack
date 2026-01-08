import React from "react";

const Layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  console.log(modal);
  return (
    <div className="relative min-h-screen">
      {/* Modal Layer */}
      <div className="relative z-10">{modal}</div>

      {/* Main Content */}
      <div className="relative z-0">{children}</div>
    </div>
  );
};

export default Layout;
