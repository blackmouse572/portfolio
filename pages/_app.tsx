import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MouseContextProvider from "../components/Cursor/cursorContext";
import Loading from "../components/Loading/Loading";
import "../styles/globals.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handlerStart = (url: string) => {
      url != router.pathname ? setLoading(true) : setLoading(false);
    };
    const handlerComplete = (url: string) => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handlerStart);
    router.events.on("routeChangeComplete", handlerComplete);
    router.events.on("routeChangeError", handlerComplete);
  }, [router]);
  return (
    <MouseContextProvider>
      <Head>
        <title> NTN Portfolio </title>
      </Head>
      <Loading loading={loading} />
      <Component {...pageProps} />
    </MouseContextProvider>
  );
}

export default MyApp;
