import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      this is the page I want to show
      <Link href={"/f4"}>click f4</Link>
    </div>
  );
};

export default page;
