import React from "react";
import Head from "next/head";
import Nav from "./navbar/Nav";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Emit</title>
      </Head>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
    </>
  );
}
