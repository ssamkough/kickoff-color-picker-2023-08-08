import Head from "next/head";
import "./_app.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Kickoff Color Palettes</title>
      </Head>
      <main style={{ maxWidth: 1200 }}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
