import type { NextPage } from 'next';

import { ParticipantesProvider } from '../components/_participantesContext';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { GlobalStyles } from '../styles/global';

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
