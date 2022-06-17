import type { NextPage } from 'next';

import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { GlobalStyles } from '../styles/global';
import { ParticipantesProvider } from './_participantesContext';

const Home: NextPage = () => {
  return (
    <ParticipantesProvider>
      <Header />
      <GlobalStyles />
      <Main />
    </ParticipantesProvider>
  );
};

export default Home;
