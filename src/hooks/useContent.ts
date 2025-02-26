// import { useMemo } from "react";
// import { Main } from "@/types/fragments";
// interface Content {
//   section: string;
//   main: Main;
// }

// interface Data {
//   landingPage: Main[];
// }

// // export const useContent = (data: Data, section: string) => {
// //   const content = useMemo(() => {
// //     return data?.landingPage?.find((c: Content) => c.section === section);
// //   }, [data, section]);

// //   return content;
// // };

// export const getContent = (data: Data, section: string) => {
//   return data?.landingPage[section];
// };
