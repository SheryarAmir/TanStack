import React from "react";

const page = async () => {
  // in here we are wating for 2 second , to resolve the promise in that two second use it not wating , or instead of showing a blanck screen we  show the loading screen which we create in this loading.tsx file . or if we fetch the data from any api we used this concept.
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("internall dealy");
    }, 2000);
  });

  return <div> blog page</div>;
};

export default page;
