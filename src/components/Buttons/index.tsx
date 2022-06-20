import { Participante } from '../participantesContext';
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
  function handlePlus() {
    clearRemove(index);

    const newListParticipantes = [...listParticipantes];
    newListParticipantes[index].contador++;
    setListParticipantes(newListParticipantes);
  }

  function handleMinus() {
    clearRemove(index);

    const newListParticipantes = [...listParticipantes];
    if (newListParticipantes[index].contador === 0) return;
    newListParticipantes[index].contador--;
    setListParticipantes(newListParticipantes);
  }

  return (
    <Container className="containerButtons">
      <img src="/assets/plus.svg" onClick={handlePlus} />
      <img src="/assets/minus.svg" onClick={handleMinus} />
    </Container>
  );
}
