import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../API/Api";




const FetchRQ = () => {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <div>
      <div>
        {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <div key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FetchRQ;
