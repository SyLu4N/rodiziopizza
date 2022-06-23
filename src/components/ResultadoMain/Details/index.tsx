import { useContext } from 'react';

import { ParticipantesContext } from '../../participantesContext';
import { Container } from './styles';

export function Details() {
  const { participantes } = useContext(ParticipantesContext);

  const fatias = participantes.reduce(
    (ac, participante) => participante.contador + ac,
    0
  );
  const medias = (fatias / participantes.length).toFixed(0);
  const inteira = (fatias / 8).toFixed(0);
  const devoradores = participantes.length;

  return (
    <Container>
      <div>
        <div>
          <img src="assets/pizzaMordida.svg" alt="Pizza Mordida" />
        </div>
        <p>Total de fatias DEVORADAS:</p>
        <span>{fatias}</span>
      </div>

      <div>
        <div>
          <img src="assets/pizzaResult.svg" alt="Pizza Derretendo" />
        </div>
        <p>Media de fatias DEVORADAS:</p>
        <span>{medias}</span>
      </div>

      <div>
        <div>
          <img src="assets/pizzaInteira.svg" alt="Pizza Inteira" />
        </div>
        <p>Pizzas inteiras DEVORADAS:</p>
        <span>{inteira}</span>
      </div>

      <div className="devoradores">
        <div>
          <img src="assets/devoradores.svg" alt="Pegando fatias" />
        </div>
        <p>Número de DEVORADORES:</p>
        <span>{devoradores}</span>
      </div>
    </Container>
  );
}
