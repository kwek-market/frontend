// import "antd/dist/antd.css";

import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.scss";

import { Provider } from "react-redux";

import store from "@/store";

import { useRouter } from "next/router";
import Script from "next/script";
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

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 20,
      staleTime: Infinity,
    },
  },
});

const MyApp = function ({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.route.includes("/admin")) {
    return (
      <>
        <Head>
          <title>Kwek Admin</title>
          <Script
            defer
            src='https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
            integrity='sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'
          ></Script>
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
        <title>Kwek</title>
        <Script
          defer
          src='https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
          integrity='sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        ></Script>
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

// const makeStore = () => store;
// const wrapper = createWrapper(makeStore);

export default MyApp;
