import { useContext, useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import { Buttons } from '../Buttons';
import { Contador } from '../Contador';
import { Image } from '../Image';
import { ModalAdd } from '../ModalAdd';
import { Participante, ParticipantesContext } from '../participantesContext';
import { Container, Content } from './styles';

export function Main(): JSX.Element {
  const { participantes, setParticipante } = useContext(ParticipantesContext);
  const [listParticipantes, setListParticipantes] = useState<Participante[]>(
    []
  );
  const [currentIndex, setCurrentIndex] = useState<null | number>(null);
  const [name, setName] = useState('');
  const [isModelResult, setIsModelResult] = useState(false);

  useEffect(() => {
    setListParticipantes(participantes);
  }, [participantes]);

  function modelResultClose() {
    setIsModelResult(false);
  }

  function modelResultOpen() {
    setIsModelResult(true);
  }

  function askDelete(index: number) {
    const newParticipantes = [...listParticipantes];
    const svg = document.querySelector(`.svg${index}`) as HTMLElement;
    const strong = document.querySelector(
      `.participante${index}`
    ) as HTMLElement;

    if (name !== '') clearRemove(index);

    const nome = newParticipantes[index].nome;
    newParticipantes[index].nome = 'Excluir?';
    setName(nome);
    setCurrentIndex(index);
    setListParticipantes(newParticipantes);

    svg.classList.add('hidden');
    strong.setAttribute('id', 'flex');
  }

  function handleCancel(index: number) {
    const newParticipantes = [...listParticipantes];

    const strong = document.querySelector(
      `.participante${index}`
    ) as HTMLElement;
    const svg = document.querySelector(`.svg${index}`) as HTMLElement;

    newParticipantes[index].nome = name;
    setListParticipantes(newParticipantes);

    strong.removeAttribute('id');
    svg.classList.remove('hidden');
  }

  function handleDelete(index: number) {
    const newParticipantes = [...listParticipantes];
    newParticipantes.splice(index, 1);

    setName('');
    setListParticipantes(newParticipantes);
    setParticipante(newParticipantes);
  }

  function clearRemove(index: number) {
    const newParticipantes = [...listParticipantes];

    const strong = document.querySelector(
      `.participante${currentIndex}`
    ) as HTMLElement;
    const svg = document.querySelector(`.svg${currentIndex}`) as HTMLElement;

    if (currentIndex === null) {
      return setCurrentIndex(index);
    }

    newParticipantes[currentIndex].nome = name;
    setListParticipantes(newParticipantes);
    strong.removeAttribute('id');
    svg.classList.remove('hidden');
  }

  return (
    <Container>
      {listParticipantes.length > 0 && (
        <Content>
          {listParticipantes.map((participante, index) => (
            <div key={index}>
              <Contador participante={participante} />
              <div className="contentName">
                <div className="contentText">
                  <p className="text">{participante.nome}</p>
                  <p className="shadow">{participante.nome}</p>
                </div>
                <FaTrashAlt
                  size={20}
                  onClick={() => askDelete(index)}
                  className={`svg${index}`}
                />

                <strong className={`participante${index}`}>
                  <p className="excluir" onClick={() => handleDelete(index)}>
                    ✔
                  </p>
                  <p className="cancelar" onClick={() => handleCancel(index)}>
                    X
                  </p>
                </strong>
              </div>
              <Image />
              <Buttons
                listParticipantes={listParticipantes}
                setListParticipantes={setListParticipantes}
                index={index}
                clearRemove={clearRemove}
              />
            </div>
          ))}
        </Content>
      )}
      <button onClick={modelResultOpen}>+ Novo participante</button>
      <ModalAdd
        isModelResult={isModelResult}
        modelResultClose={modelResultClose}
      />
    </Container>
  );
}
