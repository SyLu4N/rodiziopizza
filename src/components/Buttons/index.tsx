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
  const animation = document.querySelector(
    `.anima${index}`
  ) as HTMLParagraphElement;

  function handlePlus() {
    clearRemove(index);
    animation?.classList.add('animationContadorUp');

    setTimeout(() => {
      const newListParticipantes = [...listParticipantes];
      newListParticipantes[index].contador++;
      setListParticipantes(newListParticipantes);
      setParticipante(newListParticipantes);
      animation?.classList.remove('animationContadorUp');
    }, 400);
  }

  function handleMinus() {
    clearRemove(index);
    animation?.classList.add('animationContadorDow');

    setTimeout(() => {
      const newListParticipantes = [...listParticipantes];
      newListParticipantes[index].contador--;
      setListParticipantes(newListParticipantes);
      setParticipante(newListParticipantes);
      animation?.classList.remove('animationContadorDow');
    }, 400);
  }

  return (
    <Container className="containerButtons">
      <img src="/assets/plus.svg" onClick={handlePlus} />
      <img src="/assets/minus.svg" onClick={handleMinus} />
    </Container>
  );
}
