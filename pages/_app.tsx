import "antd/dist/antd.css";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.scss";

import { Provider } from "react-redux";

import store from "@/store";
import { createWrapper } from "next-redux-wrapper";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AdminAuthenticatedLayout } from "../layouts/AdminAuthenticatedLayout/AdminAuthenticatedLayout";
// import { setPusherClient } from "react-pusher";
// import Pusher from "pusher-js";

// const key = process.env.NEXT_PUBLIC_PUSHER_KEY;
// Pusher.logToConsole = true;
// const pusherClient = new Pusher(key, {
//   cluster: "mt1",
// });

// setPusherClient(pusherClient);

const MyApp = function ({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        cacheTime: 1000 * 60 * 20,
        staleTime: Infinity,
      },
    },
  });

  if (router.route.includes("/admin")) {
    return (
      <>
        <Head>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'
          />

          <link
            href='https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
            rel='stylesheet'
          />
          <title>Kwek</title>
          <meta name='description' content='Online Shop' />
          {/* twitter meta-tags */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='https://www.kwekmarket.com' />
          <meta name='twitter:creator' content='@kwekmarket' />
          <meta name='twitter:title' content='Kwek Market' />
          <meta name='twitter:description' content='Online Market Site' />
          <meta name='twitter:image' content='' />
          <meta name='twitter:image:alt' content='kwekmarket'></meta>
          {/* facebook meta-tags */}
          <meta property='og:url' content='https://www.kwekmarket.com' />
          <meta property='og:type' content='Web App' />
          <meta property='og:title' content='KwekMarket' />
          <meta property='og:description' content='Online Market Site' />
          <meta property='og:image' content='' />
          <meta property='og:image:alt' content='kwekmarket' />

          <script
            defer
            src='https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
            integrity='sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'
          ></script>
        </Head>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <AdminAuthenticatedLayout>
              <Component {...pageProps} />
            </AdminAuthenticatedLayout>
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
  }

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'
        />

        <link
          href='https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
          rel='stylesheet'
        />
        <title>Kwek</title>
        <meta name='description' content='Online Shop' />
        {/* twitter meta-tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='https://www.kwekmarket.com' />
        <meta name='twitter:creator' content='@kwekmarket' />
        <meta name='twitter:title' content='Kwek Market' />
        <meta name='twitter:description' content='Online Market Site' />
        <meta name='twitter:image' content='' />
        <meta name='twitter:image:alt' content='kwekmarket'></meta>
        {/* facebook meta-tags */}
        <meta property='og:url' content='https://www.kwekmarket.com' />
        <meta property='og:type' content='Web App' />
        <meta property='og:title' content='KwekMarket' />
        <meta property='og:description' content='Online Market Site' />
        <meta property='og:image' content='' />
        <meta property='og:image:alt' content='kwekmarket' />

        <script
          defer
          src='https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
          integrity='sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        ></script>
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
