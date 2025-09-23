import React from "react";

const Layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <div className="relative min-h-screen">
      {/* Main Content */}
      <div className="relative z-0">{children}</div>
      {/* Modal Layer */}
      <div className="relative z-10">{modal}</div>
    </div>
  );
};

export default Layout;
