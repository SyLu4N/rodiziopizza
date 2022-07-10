import { Participante } from '../../hooks/useParticipantesContext';
import { Container, ContentContador } from './styles';

interface ContadorProps {
  participante: Participante;
  index: number;
}

export function Contador({ participante, index }: ContadorProps) {
  return (
    <Container className="contador">
      <div className="teste">
        <ContentContador>
          <p className={`anima${index}`}>{participante.contador + 1}</p>
          <p>{participante.contador}</p>
          {participante.contador > 0 ? (
            <p>{participante.contador - 1}</p>
          ) : (
            <p>{participante.contador}</p>
          )}
        </ContentContador>
      </div>
    </Container>
  );
}
