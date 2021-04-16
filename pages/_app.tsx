import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        ></link>

        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <div className="no-mobile">
        <h3>Please Use A Desktop Device <span>{`:(`}</span> </h3>
      </div>
    </React.Fragment>
  );
}

export default MyApp;
