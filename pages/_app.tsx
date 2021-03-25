import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../sass/main.scss";
import "antd/dist/antd.css";
import { Fragment } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="/fonts/font.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        ></link>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
