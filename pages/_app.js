import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import dynamic from 'next/dynamic';
import "../styles/style.css";

const Navbar = dynamic(() => import('./Navbar'), { ssr: false });
const Homepage = dynamic(() => import('./OfficalHomepage'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./favicon.ico" />
        <title>Joey Velichkov</title>
        <meta name="description" content="Joey Velichkov" />
      </Head>
      <Navbar />
      {router.pathname === '/' ? <main><Homepage /> </main> : <Component {...pageProps} />}
      <Footer />
    </>
  )
}

export default App

