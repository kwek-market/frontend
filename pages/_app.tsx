import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
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
