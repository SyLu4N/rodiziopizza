import type { NextPage } from 'next';

import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { ParticipantesProvider } from '../components/participantesContext';
import { GlobalIndex } from './indexStyle';

const Home: NextPage = () => {
  return (
    <ParticipantesProvider>
      <Header />
      <Main />
      <GlobalIndex />
    </ParticipantesProvider>
  );
};

export default Home;
