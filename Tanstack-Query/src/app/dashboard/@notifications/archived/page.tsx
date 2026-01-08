import Link from "next/link";
import React from "react";

const Archived = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolor modi
      placeat error totam, voluptatem pariatur ad amet quos corrupti ratione
      nulla a quam neque ipsam debitis? Ratione, magni culpa.
      <Link href={"/dashboard"}>
        <button>default</button>
      </Link>
    </div>
  );
};

export default Archived;
