import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Love Meter - Dwemo</title>
        <link rel="icon" href="/smile.png" sizes="180x180" type="image/png" />
        <meta name="description" content="Love Meter - Createdbydwe" />
      </Head>
      <Component {...pageProps} />{' '}
    </>
  );
}
