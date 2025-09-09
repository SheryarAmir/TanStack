"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <button onClick={() => setParam("param", "1")}>Set param=1</button>
     
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
