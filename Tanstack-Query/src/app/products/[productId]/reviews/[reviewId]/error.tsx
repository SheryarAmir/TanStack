"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { startTransition } from "react"; // use for server side recovery

const ErrorBoundarry = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void; // this function only rerender the reviewId page only any try to resolve the error
}) => {
  const Router = useRouter();
  function reload() {
    startTransition(() => {
      Router.refresh();
      reset();
    });
  }
  return (
    <div>
      {error.message}
      <br />

      <button onClick={reload}>try again</button>
    </div>
  );
};

export default ErrorBoundarry;
