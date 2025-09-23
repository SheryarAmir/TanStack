import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      this is inner-f2 page
      <Link href={"/f5"}>go to f5 </Link>
    </div>
  );
};

export default page;
