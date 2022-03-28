import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../lib/create-emotion-cache';
import Head from 'next/head';
import { AppWrapper } from '../context/context';
import ThemeWrapper from '../components/theme-wrapper/theme-wrapper.js';
import { CssBaseline } from '@mui/material';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    router,
  } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <AppWrapper>
        <ThemeWrapper>
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeWrapper>
      </AppWrapper>
    </CacheProvider>
  );
}

export default MyApp;
