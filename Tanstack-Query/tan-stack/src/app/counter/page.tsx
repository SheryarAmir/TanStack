"use client";

import { useCouterStore } from "@/store/Counter.store";
import React, { useEffect } from "react";

const logcount = () => {
  useCouterStore.setState({ count: 1 });

  //  Can't do this here because hooks only run inside React components:
  // const count = useCouterStore((state) => state.count)

  //  But Zustand also gives you access to the store object directly:
  // Get current state: useCouterStore.getState()
  // Set new state: useCouterStore.setState()
};

const page = () => {
  const count = useCouterStore((state) => state.count);
  const incrementAsync = useCouterStore((state) => state.incrementAsync);
  const decrement = useCouterStore((state) => state.decrement);

  useEffect(() => {
    logcount();
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementAsync}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default page;
