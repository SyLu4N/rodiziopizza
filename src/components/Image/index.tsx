import { useEffect, useState } from 'react';

import { Participante } from '../participantesContext';
import { Container } from './styles';

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
  const [isClick, setIsClick] = useState<boolean>(false);
  const [contador, setContador] = useState(0);

  function firstClick() {
    if (contador !== 0) return;
    const newListParticipantes = [...listParticipantes];
    newListParticipantes[index].contador++;
    setListParticipantes(newListParticipantes);
  }

  useEffect(() => {
    function longclick() {
      if (!isClick) return;

      let time: number, self: any;

      return function (this: HTMLElement) {
        if (!self) {
          setContador(1);
          self = this;
          self.addEventListener('mouseup', function as() {
            const interval = new Date().getTime() - time;

            if (interval >= 500) {
              const newListParticipantes = [...listParticipantes];
              newListParticipantes[index].contador--;
              setListParticipantes(newListParticipantes);
            } else {
              const newListParticipantes = [...listParticipantes];
              newListParticipantes[index].contador++;
              setListParticipantes(newListParticipantes);
            }
            setIsClick(false);
            self.removeEventListener('mouseup', as);
          });
        }

        time = new Date().getTime();
      };
    }

    const exeFunction = longclick() as () => void;

    const div = document.querySelector(`.pizza${index}`) as HTMLElement;
    div.addEventListener('mousedown', exeFunction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClick]);

  return (
    <Container
      className={`pizza${index}`}
      onClick={() => {
        setIsClick(true);
        firstClick();
      }}
    >
      <abbr title="Adicionar">
        <img src="/assets/pizza.svg" alt="Pizza" />
        <em></em>
      </abbr>
    </Container>
  );
}
