import type { NextPage } from 'next';

import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { ParticipantesProvider } from '../components/participantesContext';
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
