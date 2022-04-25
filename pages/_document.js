import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,500;1,400&family=Oswald:wght@200;300;400;500;600;700&family=Ubuntu+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-[#EBE7E0]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
