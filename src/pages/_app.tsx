import type { AppProps } from 'next/app';

import { ParticipantesProvider } from '../components/participantesContext';
import { GlobalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParticipantesProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ParticipantesProvider>
  );
}

export default MyApp;
