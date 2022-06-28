import { useEffect, useState } from 'react';

import {
  Participante,
  useParticipantes,
} from '../../hooks/useParticipantesContext';
import { Contador } from './Contador';
import { Details } from './Details';
import { Rank } from './Rank';
import { Container, Content, ContentRank } from './styles';
import { Text } from './Text';

export function ResultadoMain() {
  const { participantes, setParticipante } = useParticipantes();

  const [reset, setReset] = useState<boolean>(false);
  const [newParticipantes, setNewParticipantes] =
    useState<Participante[]>(participantes);
  let contador = 0;

  useEffect(() => {
    if (reset) return;

    const participanteStorage = participantes.sort(
      (x, y) => y.contador - x.contador
    );

    setNewParticipantes(participanteStorage);
  }, [participantes]);

  let rank = 1;

  function resetList() {
    contador++;

    if (contador === newParticipantes.length) {
      setReset(true);
      setParticipante([]);
    }
  }

  return (
    <Container>
      <img className="totem" src="/assets/totem.svg" alt="Totem de trófeus" />

      <Content onLoad={resetList}>
        {newParticipantes.map((participante, index) => (
          <ContentRank key={index}>
            <Rank rank={rank++} />
            <Text name={participante.nome} />
            <Contador value={participante.contador} />
          </ContentRank>
        ))}
      </Content>

      <Details participantes={newParticipantes} />
    </Container>
  );
}
