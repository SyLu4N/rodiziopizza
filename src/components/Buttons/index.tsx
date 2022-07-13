import {
  Participante,
  useParticipantes,
} from '../../hooks/useParticipantesContext';
import { Container } from './styles';

interface ButtonsProps {
  listParticipantes: Participante[];
  setListParticipantes: (value: Participante[]) => void;
  index: number;
  clearRemove: (index: number) => void;
}

export function Buttons({
  listParticipantes,
  setListParticipantes,
  index,
  clearRemove,
}: ButtonsProps) {
  const { setParticipante } = useParticipantes();

  const timeAnimation = 250;

  function handlePlus() {
    const animation = document.querySelector(
      `.anima${index}`
    ) as HTMLParagraphElement;

    clearRemove(index);
    animation?.classList.add('animationContadorUp');

    setTimeout(() => {
      const newListParticipantes = [...listParticipantes];
      newListParticipantes[index].contador++;
      setListParticipantes(newListParticipantes);
      setParticipante(newListParticipantes);
      animation?.classList.remove('animationContadorUp');
    }, timeAnimation);
  }

  function handleMinus() {
    const animation = document.querySelector(
      `.anima${index}`
    ) as HTMLParagraphElement;

    clearRemove(index);
    const newListParticipantes = [...listParticipantes];

    if (newListParticipantes[index].contador === 0) return;

    animation?.classList.add('animationContadorDow');

    setTimeout(() => {
      newListParticipantes[index].contador--;
      setListParticipantes(newListParticipantes);
      setParticipante(newListParticipantes);
      animation?.classList.remove('animationContadorDow');
    }, timeAnimation);
  }

  return (
    <Container className="containerButtons">
      <img src="/assets/plus.svg" onClick={handlePlus} />
      <img src="/assets/minus.svg" onClick={handleMinus} />
    </Container>
  );
}
