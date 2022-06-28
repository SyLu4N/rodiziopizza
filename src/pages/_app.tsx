import type { AppProps } from 'next/app';

import { Footer } from '../components/Footer';
import { ParticipantesProvider } from '../hooks/useParticipantesContext';
import { GlobalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParticipantesProvider>
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </ParticipantesProvider>
  );
}

export default MyApp;
