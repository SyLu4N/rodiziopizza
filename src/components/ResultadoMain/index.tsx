import { useContext, useEffect, useState } from 'react';

import { Participante, ParticipantesContext } from '../participantesContext';
import { Contador } from './Contador';
import { Rank } from './Rank';
import { Container, Content } from './styles';
import { Text } from './Text';

export function ResultadoMain() {
  const { participantes } = useContext(ParticipantesContext);

  const [newParticipantes, setNewParticipantes] =
    useState<Participante[]>(participantes);

  useEffect(() => {
    const participanteStorage = participantes.sort(
      (x, y) => y.contador - x.contador
    );

    setNewParticipantes(participanteStorage);
  }, [participantes]);

  let rank = 1;

  return (
    <Container>
      <img className="totem" src="/assets/totem.svg" alt="Totem de trófeus" />

      <div>
        {newParticipantes.map((participante, index) => (
          <Content key={index}>
            <Rank rank={rank++} />
            <Text name={participante.nome} />
            <Contador value={participante.contador} />
          </Content>
        ))}
      </div>
    </Container>
  );
}
