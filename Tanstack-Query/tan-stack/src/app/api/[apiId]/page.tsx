"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { fetchCharacters } from "../../services/api";
import { CharactersResponse } from "../../../types/character";
import { useCharacterStore } from "../../store/useCharStore";

export default function Page() {
  const params = useParams();
  const searchParams = useSearchParams();
  const apiId = params?.apiId;
  const param = searchParams.get("param") || "";

  const characters = useCharacterStore((state) => state.characters);
  const setCharacters = useCharacterStore((state) => state.setCharacters);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters"],
    queryFn: fetchCharacters,

    meta: {
      onSuccess: (data: CharactersResponse) => {
        console.log("Fetched results:", data.results);
        setCharacters(data.results);
      },
    },
  });

  console.log(data?.results);
  console.log(characters, "charactors=");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while fetching data.</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Params: {apiId}</h1>
      <h2 className="text-lg">Search Param: {param}</h2>

      <ul>
        {characters?.map((char) => (
          <div key={char.id}>
            <li>{char.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
