import "@/styles/globals.css";
import App from "next/app";
import TabProvider from "@/components/TabProvider";
import ShowProvider from "@/components/ShowProvider";
import showCollection from "/json/data.json";
import path from "path";
import { promises as fs } from "fs";

export default function myApp({ Component, pageProps }) {
  const data = showCollection.collection;

  return (
    <>
      <ShowProvider data={data}>
        <TabProvider>
          <Component {...pageProps} />
        </TabProvider>
      </ShowProvider>
    </>
  );
}

// myApp.getInitialProps = async ({ Component, ctx }) => {
//   let pageProps = {};

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   // const res = await fetch("http://localhost:3000/json/data.json");
//   // const data = res.json();

//   // const showCollection = data;

//   // const showCollection = fetcher();
//   const jsonDirectory = path.join(process.cwd(), "json");
//   const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
//   const showCollection = JSON.parse(fileContents);

//   return { pageProps, showCollection };
// };
