import { Participante } from '../../@types/participantes';
import { Container, ContentContador } from './styles';

interface ContadorProps {
  participante: Participante;
  index: number;
}

export function Contador({ participante, index }: ContadorProps) {
  const fatias = participante.fatias ?? 0;

  return (
    <Container className="contador">
      <div>
        <ContentContador>
          <p className={`anima${index}`}>{fatias + 1}</p>

          <p>{fatias}</p>

          {fatias > 0 ? <p>{fatias - 1}</p> : <p>{fatias}</p>}
        </ContentContador>
      </div>
    </Container>
  );
}
