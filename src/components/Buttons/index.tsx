import { useParticipantes } from '../../hooks/useParticipantes';
import { Container } from './styles';

interface ButtonsProps {
  index: number;
}

export function Buttons({ index }: ButtonsProps) {
  const { participantes, setParticipantes } = useParticipantes();

  const timeAnimation = 250;

  function aumentarFatias() {
    const animation = document.querySelector(
      `.anima${index}`
    ) as HTMLParagraphElement;
    animation?.classList.add('animationContadorUp');

    const newParticipantes = [...participantes];
    const participante = newParticipantes[index];

    setTimeout(() => {
      participante.fatias = (participante?.fatias ?? 0) + 1;

      participantes[index] = participante;
      setParticipantes(newParticipantes);

      animation?.classList.remove('animationContadorUp');
    }, timeAnimation);
  }

  function diminuirFatias() {
    const animation = document.querySelector(
      `.anima${index}`
    ) as HTMLParagraphElement;

    const newListParticipantes = [...participantes];

    if (newListParticipantes[index].fatias === 0) return;

    animation?.classList.add('animationContadorDow');

    const newParticipantes = [...participantes];
    const participante = newParticipantes[index];

    setTimeout(() => {
      if (!participante.fatias) return;
      participante.fatias -= 1;

      participantes[index] = participante;
      setParticipantes(newParticipantes);
      animation?.classList.remove('animationContadorDow');
    }, timeAnimation);
  }

  return (
    <Container className="containerButtons">
      <img src="/assets/plus.svg" onClick={aumentarFatias} />
      <img src="/assets/minus.svg" onClick={diminuirFatias} />
    </Container>
  );
}
