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

import Link from "next/link";

const Page = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Notification</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam id
            a blanditiis numquam porro culpa quidem quasi ea ab at, asperiores
            quia temporibus consequatur quod sint nobis corrupti cupiditate
            similique!
          </p>
        </CardContent>
        <CardFooter>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquid
            adipisci delectus eligendi nisi ea perspiciatis! Sed pariatur,
            commodi non maiores, omnis, eum harum quod est accusantium fuga
            tenetur unde?
          </p>
        </CardFooter>
      </Card>

      <Link href={"/dashboard/archived"}>
        {" "}
        <button className="p-2 border-r-blue-900 bg-green-600 text-white">
          Archived{" "}
        </button>
      </Link>
    </div>
  );
};

export default Page;
