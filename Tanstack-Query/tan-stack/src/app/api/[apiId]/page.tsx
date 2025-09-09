"use client";

import { useCharacterById } from "../../../hook/character.hook"
import { useParams } from "next/navigation";
export default function Page() {
  const { apiId } = useParams();
  const id = Number(apiId);

  const { data, isLoading, error } = useCharacterById(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred while fetching data.</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Character Details for ID: {id}</h1>
      <h2 className="text-lg">Name: {data.name}</h2>
      <p>Status: {data.status}</p>
      <p>Species: {data.species}</p>
    </div>
  );
}


