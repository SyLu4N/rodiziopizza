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

        <meta
          name="description"
          content="RoidizioPizza é a solução perfeita para os amantes de pizza que adoram uma competição saudável com amigos ou família. Com nossa aplicação, você pode contabilizar suas próprias fatias de pizza e também as de outros participantes, criando uma experiência divertida e interativa. Acompanhe seu progresso, desafie seus amigos e veja quem consegue comer mais fatias em uma única refeição. Com o RoidizioPizza, cada mordida se torna uma oportunidade para celebrar e competir, tornando suas refeições de pizza ainda mais memoráveis e emocionantes."
        />

        <meta
          name="keywords"
          content="contador de fatias, contar fatias, contar pizzas, rodizio pizza, rodiziopizza, rodizio, fatias, pizza, contador, Luan Simões"
        />

        <meta property="og:title" content="RodizioPizza" />
        <meta
          property="og:description"
          content="RoidizioPizza é a solução perfeita para os amantes de pizza que adoram uma competição saudável com amigos ou família. Com nossa aplicação, você pode contabilizar suas próprias fatias de pizza e também as de outros participantes, criando uma experiência divertida e interativa. Acompanhe seu progresso, desafie seus amigos e veja quem consegue comer mais fatias em uma única refeição. Com o RoidizioPizza, cada mordida se torna uma oportunidade para celebrar e competir, tornando suas refeições de pizza ainda mais memoráveis e emocionantes."
        />
        <meta property="og:image" content="https://ibb.co/xFchkDZ" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://rodiziopizza.vercel.app/" />

        <meta name="author" content="Luan Simões" />
      </Head>

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

      <PushText textMain="Finalizar" textPush="Deseja finalizar o rodízio?" />
    </Container>
  );
};

export default Home;
