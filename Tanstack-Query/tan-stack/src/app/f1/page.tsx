import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1> the main source page</h1>
      <br />

      <Link href={"/f1/f2"}>click f2</Link>
      <br />
      <Link href={"/f3"}>click f3</Link>
    </div>
  );
};

export default page;
