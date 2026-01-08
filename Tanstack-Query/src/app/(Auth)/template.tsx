"use client";

import React, { useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <p>this is header</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {children}
      <p>this is footer</p>
    </div>
  );
};

export default layout;
