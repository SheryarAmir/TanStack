"use client";
import { useQuery, useMutation } from "@tanstack/react-query";

type post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchpost(): Promise<post[]> {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  return responce.json();
}
export default function Home() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: fetchpost,
  });

  if (isLoading) return <p>loding data</p>;

  if (isError) {
    return <p>there is an error</p>;
  }
  return (  
    <div>
      {data?.map((post) => (
        <div key={post.id}>
          <p>{post.userId}</p>
          <br />
          <p>{post.title}</p>
          <br />
          <p>{post.id}</p>
          <br />
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
