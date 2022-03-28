import Head from "next/head";
import { ReactNode } from "react";

export default function Index(): ReactNode {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Template</title>
      </Head>

      <main className="prose">
        <h1>Hello World!</h1>
      </main>
    </>
  );
}
