import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.scss";
import "antd/dist/antd.css";

import { Provider } from "react-redux";

import { createWrapper } from "next-redux-wrapper";
import store from "@/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const MyApp = function ({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
        <title>Kwek</title>
        <meta name="description" content="Online Shop" />
      </Head>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </Provider>

      {/* <div className="no-mobile">
        <h3>
          Please Use A Desktop Device <span>{`:(`}</span>{" "}
        </h3>
      </div> */}
    </>
  );
};

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
