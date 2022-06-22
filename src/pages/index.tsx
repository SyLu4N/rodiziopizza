import type { NextPage } from 'next';

import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { GlobalIndex } from './indexStyle';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main />
      <GlobalIndex />
    </>
  );
};

export default Home;
