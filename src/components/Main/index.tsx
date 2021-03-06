import { useEffect, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

import Head from 'next/head';

import {
  Participante,
  useParticipantes,
} from '../../hooks/useParticipantesContext';
import { Buttons } from '../Buttons';
import { Contador } from '../Contador';
import { Header } from '../Header';
import { ModalAdd } from '../ModalAdd';
import { PushText } from '../PushText';
import { Container, Content, ContentStart } from './styles';

export function Main(): JSX.Element {
  const { participantes, setParticipante } = useParticipantes();
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
    document.body.style.overflowY = 'visible';
    setIsModelResult(false);
  }

  function modelResultOpen() {
    setTimeout(() => {
      document.body.style.overflowY = 'hidden';
    }, 400);
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
    strong.classList.remove('hidden');
  }

  function handleCancel(index: number) {
    const newParticipantes = [...listParticipantes];

    const strong = document.querySelector(
      `.participante${index}`
    ) as HTMLElement;
    const svg = document.querySelector(`.svg${index}`) as HTMLElement;

    newParticipantes[index].nome = name;
    setListParticipantes(newParticipantes);

    strong.classList.add('hidden');
    svg.classList.remove('hidden');
  }

  function handleDelete(index: number) {
    const newParticipantes = [...listParticipantes];
    newParticipantes.splice(index, 1);

    setName('');
    setListParticipantes(newParticipantes);
    setParticipante(newParticipantes);
    clearRemove(index);
  }

  function clearRemove(index: number) {
    if (!name) return;

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
    strong.classList.add('hidden');
    svg.classList.remove('hidden');
  }

  return (
    <Container>
      <Head>
        <title>RodizioPizza | Home</title>
      </Head>

      <ModalAdd
        isModelResult={isModelResult}
        modelResultClose={modelResultClose}
      />

      <Header id="header" />

      {listParticipantes.length > 0 ? (
        <>
          <Content>
            {listParticipantes.map((participante, index) => (
              <div key={index} className="contentPart">
                <Contador participante={participante} index={index} />
                <div className="contentName">
                  <div className="contentText">
                    <p className="text">{participante.nome}</p>
                    <p className="shadow">{participante.nome}</p>
                  </div>
                  <img
                    src="/assets/lixeira.svg"
                    alt="Lixeira"
                    onClick={() => askDelete(index)}
                    className={`svg${index}`}
                  />

                  <strong className={`participante${index} hidden`}>
                    <p className="excluir" onClick={() => handleDelete(index)}>
                      ???
                    </p>
                    <p className="cancelar" onClick={() => handleCancel(index)}>
                      X
                    </p>
                  </strong>
                </div>
                <Buttons
                  listParticipantes={listParticipantes}
                  setListParticipantes={setListParticipantes}
                  index={index}
                  clearRemove={clearRemove}
                />
              </div>
            ))}
          </Content>
          <a className="new" href="#header" onClick={modelResultOpen}>
            + Novo participante
          </a>
          <PushText
            textMain="Finalizar"
            textPush="Deseja finalizar o rod??zio?"
          />
        </>
      ) : (
        <ContentStart>
          <div>
            <img src="/assets/rodiziopizza.svg" alt="Pizza Inteira" />
          </div>
          <button className="start" onClick={modelResultOpen}>
            <a href="#header">Come??ar Rod??zio</a> <AiOutlineSend />
          </button>
        </ContentStart>
      )}
    </Container>
  );
}
