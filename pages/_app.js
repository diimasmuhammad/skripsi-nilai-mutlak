import "tailwindcss/tailwind.css";
import Head from "next/head";
import "./global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{process.env.namaAplikasi}</title>
        <link rel="icon" href="/icon.svg"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
