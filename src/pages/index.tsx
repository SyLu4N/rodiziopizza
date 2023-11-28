import type { NextPage } from 'next';
import Head from 'next/head';

import { Participantes } from '../components/participantes';
import { PushText } from '../components/PushText';
import { useParticipantes } from '../hooks/useParticipantes';
import { Container } from '../styles/home';

const Home: NextPage = () => {
  const { participantes, criarParticipante } = useParticipantes();

  return (
    <Container>
      <Head>
        <title>RodizioPizza | Home</title>
      </Head>

      <div>
        <h1>Hoje vou dar prejuízo!</h1>

        {participantes?.map((participante, index) => (
          <Participantes
            participante={participante}
            index={index}
            key={participante.id}
          />
        ))}

        <a className="new" onClick={() => criarParticipante()}>
          + Novo participante
        </a>
      </div>

      <PushText textMain="Finalizar" textPush="Deseja finalizar o rodízio?" />
    </Container>
  );
};

export default Home;
