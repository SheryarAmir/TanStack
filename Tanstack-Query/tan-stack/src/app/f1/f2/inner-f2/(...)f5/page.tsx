import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      Intercepted page for (...)f5
      <Link href={"/f5"}></Link>
    </div>
  );
};

export default page;
