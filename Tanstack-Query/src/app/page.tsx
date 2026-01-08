"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter(); // use to navigate programmatically
  const pathname = usePathname(); // current path without query string like "/api"
  const searchParams = useSearchParams(); // returns URLSearchParams object representing the query string "param=1"

  function changeParams(blogId: number, key: string, value: string) {
    const Sparams = new URLSearchParams(searchParams.toString());
    Sparams.set(key, value);

    router.push(`/blog/${blogId}?${Sparams.toString()}`);
  }
  return (
    <div>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => changeParams(4, "age", "23")}
      >
        get the AGE
      </button>
    </div>
  );
}

// "use client";

// import { useRouter, usePathname } from "next/navigation";

// export default function Page() {
//   const router = useRouter();

//   const pathname = usePathname();

//   const handleClick = () => {
//     const params = new URLSearchParams({ param: "1" });
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// import Link from "next/link";

// export default function Page() {
//   return (
//     <div>
//       <Link href={{ pathname: "/api", query: { param: "1" } }}>
//         <button>Click me</button>
//       </Link>
//     </div>
//   );
// }

// "use client";

// import { useRouter, usePathname, useSearchParams } from "next/navigation";

// export default function Page() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const handleClick = () => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("param", "1");
//     router.replace(`${pathname}?${params.toString()}`);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Set param=1</button>
//     </div>
//   );
// }
