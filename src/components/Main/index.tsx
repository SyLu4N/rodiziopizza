import { useContext, useEffect, useState } from 'react';

import {
  Participante,
  ParticipantesContext,
} from '../../pages/_participantesContext';
import { Image } from '../Image';
import { ModalAdd } from '../ModalAdd';
import { Container, Content } from './styles';

export function Main(): JSX.Element {
  const { participantes, setParticipante } = useContext(ParticipantesContext);
  const [listParticipantes, setListParticipantes] = useState<Participante[]>(
    []
  );
  const [name, setName] = useState('');

  useEffect(() => {
    setListParticipantes(participantes);
  }, [participantes]);

  const [isModelResult, setIsModelResult] = useState(false);

  function modelResultClose() {
    setIsModelResult(false);
  }

  function modelResultOpen() {
    setIsModelResult(true);
  }

  function dbHandle(index: number) {
    const newParticipantes = [...listParticipantes];
    const strong = document.querySelector(
      `.participante${index}`
    ) as HTMLElement;

    const nome = newParticipantes[index].nome;
    setName(nome);
    newParticipantes[index].nome = 'Excluir?';
    setListParticipantes(newParticipantes);
    strong.style.display = 'flex';
  }

  function handleDelete(index: number) {
    const newParticipantes = [...listParticipantes];
    newParticipantes.splice(index, 1);

    setListParticipantes(newParticipantes);
    setParticipante(newParticipantes);
  }

  function handleCancel(index: number) {
    const newParticipantes = [...listParticipantes];
    const strong = document.querySelector(
      `.participante${index}`
    ) as HTMLElement;

    newParticipantes[index].nome = name;
    setListParticipantes(newParticipantes);
    strong.style.display = 'none';
  }

  return (
    <Container>
      <Content>
        {listParticipantes.map((participante, index) => (
          <div key={index}>
            <span>
              {participante.contador}
              <em></em>
            </span>
            <p onDoubleClick={() => dbHandle(index)}>
              {participante.nome}
              <strong className={`participante${index}`}>
                <p className="excluir" onClick={() => handleDelete(index)}>
                  ✔
                </p>
                <p className="cancelar" onClick={() => handleCancel(index)}>
                  X
                </p>
              </strong>
            </p>
            <Image
              listParticipantes={listParticipantes}
              setListParticipantes={setListParticipantes}
              index={index}
            />
          </div>
        ))}
      </Content>
      <button onClick={modelResultOpen}>+ Novo participante</button>
      <ModalAdd
        isModelResult={isModelResult}
        modelResultClose={modelResultClose}
      />
    </Container>
  );
}
