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

const UserPage = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>users</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <ul>
            <h1>Kohminds</h1>
            <li>home</li>
            <li>service</li>
            <li>about</li>
            <li>blog</li>
            <li>contact</li>
          </ul>
        </CardContent>
        <CardFooter>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            iure odio facere, quas quibusdam adipisci distinctio. Dolor, sunt?
            Atque libero asperiores laboriosam voluptatum impedit soluta rerum
            sint est voluptate illo!{" "}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserPage;
