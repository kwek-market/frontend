import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.scss";

import {Provider} from 'react-redux';
import withRedux from "next-redux-wrapper";
import store from '@/store';

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
        <title>Kwek</title>
        <meta name="description" content="Online Shop"/>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      
      <div className="no-mobile">
        <h3>Please Use A Desktop Device <span>{`:(`}</span> </h3>
      </div>
    </React.Fragment>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
