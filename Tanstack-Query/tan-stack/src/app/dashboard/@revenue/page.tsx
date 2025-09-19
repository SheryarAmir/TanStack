import React from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Page = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            provident maiores sapiente, quis explicabo ut magni perferendis?
            Corporis velit, est maiores incidunt totam voluptatum quae nisi
            officiis eos illo suscipit.
          </p>
        </CardContent>
        <CardFooter>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            voluptate magni repellendus facere beatae, delectus ea commodi
            libero eveniet sed ducimus tempore sunt. Repellat doloribus maxime
            alias quam dolorum vero.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
