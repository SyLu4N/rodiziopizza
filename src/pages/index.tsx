import type { NextPage } from 'next';

import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { ParticipantesProvider } from '../components/participantesContext';

const Home: NextPage = () => {
  return (
    <ParticipantesProvider>
      <Header />
      <Main />
    </ParticipantesProvider>
  );
};

export default Home;
