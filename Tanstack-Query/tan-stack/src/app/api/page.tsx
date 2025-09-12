"use client";

import { useParams, useSearchParams,useRouter } from "next/navigation";
import { useCharacters } from "../../hook/character.hook";
import { useCharacterStore } from "../../store/character.store";


export default function Page() {
    const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

        
  const apiId = params?.apiId;
  const param = searchParams.get("param") || "";

 
  function viewById(id: number) {
    router.push(`/api/${id}`);
  }

 
  const { isLoading, isError } = useCharacters();

  const characters = useCharacterStore((state) => state.characters);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while fetching data.</div>;

console.log("Characters from store:", characters);


  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Params: {apiId}</h1>
      <h2 className="text-lg">Search Param: {param}</h2>

      <ul>
        {characters?.map((char) => (
          <div key={char.id} className="mb-4 bg-amber-200 p-4 rounded   shadow">
           <li>{char.name}</li>
           <li>{char.id}</li>
           <button className="text-white bg-red-300" onClick={() => viewById(char.id)}>Log ID</button>
            </div>
        ))}

      </ul>
    </div>
  );
}
