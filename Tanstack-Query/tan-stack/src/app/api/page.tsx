"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useCharacters } from "../../hook/character.hook";
import { useCharacterStore } from "../../store/character.store";

export default function Page() {
    
  const params = useParams();
  const searchParams = useSearchParams();
  const apiId = params?.apiId;
  const param = searchParams.get("param") || "";

 
  const { isLoading, isError } = useCharacters();

  const characters = useCharacterStore((state) => state.characters);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while fetching data.</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Params: {apiId}</h1>
      <h2 className="text-lg">Search Param: {param}</h2>

      <ul>
        {characters?.map((char) => (
          <li key={char.id}>{char.name}</li>
        ))}
      </ul>
    </div>
  );
}
