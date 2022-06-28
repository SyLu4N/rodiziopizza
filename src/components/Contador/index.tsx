import { Participante } from '../../hooks/useParticipantesContext';
import { Container } from './styles';

interface ContadorProps {
  participante: Participante;
}

export function Contador({ participante }: ContadorProps) {
  return (
    <Container className="contador">
      <p>
        {participante.contador}
        <em></em>
      </p>
    </Container>
  );
}
