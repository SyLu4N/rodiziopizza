import { useEffect } from 'react';

import { Participante } from '../../pages/_participantesContext';

interface ImageProps {
  listParticipantes: Participante[];
  setListParticipantes: (value: Participante[]) => void;
  index: number;
}

export function Image({
  listParticipantes,
  setListParticipantes,
  index,
}: ImageProps) {
  function handleContador() {
    const newParticipantes = [...listParticipantes];
    newParticipantes[index].contador++;

    setListParticipantes(newParticipantes);
  }

  return (
    <div onClick={handleContador}>
      <abbr title="Adicionar">
        <img src="/assets/pizza.svg" alt="Pizza" />
        <em></em>
      </abbr>
    </div>
  );
}
