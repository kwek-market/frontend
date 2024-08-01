import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'
        />

        <link
          href='https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
          rel='stylesheet'
        />

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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
