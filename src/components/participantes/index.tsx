import { useState, useEffect } from 'react';

import { Participante } from '../../@types/participantes';
import { useParticipantes } from '../../hooks/useParticipantes';
import { Buttons } from '../Buttons';
import { Contador } from '../Contador';
import { TextoComSombra } from '../textoComSombra';
import { Content } from './styles';

interface ParticipantesProps {
  participante: Participante;
  index: number;
}

export function Participantes({ index, participante }: ParticipantesProps) {
  const { participantes, setParticipantes } = useParticipantes();

  const [nome, setNome] = useState(participante.nome);
  const [isDelete, setIsDelete] = useState(false);

  function handleDelete() {
    if (!participantes) return;

    const newParticipantes = [...participantes];
    newParticipantes.splice(index, 1);

    setParticipantes(newParticipantes);
    setIsDelete(false);
  }

  function handleAskDelete() {
    setIsDelete(true);

    function ask(e: any) {
      const el = e.target;

      const outsideClick =
        !el.classList.contains('cancelar') &&
        !el.classList.contains('excluir') &&
        !el.classList.contains('svg');

      if (outsideClick) {
        document.removeEventListener('click', ask);
        setIsDelete(false);
      }
    }

    document.addEventListener('click', ask);
  }

  useEffect(() => {
    if (!participantes) return;

    const newParticipantes = [...participantes];
    newParticipantes[index].nome = nome;

    setParticipantes(newParticipantes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nome]);

  return (
    <Content>
      <Contador participante={participante} index={index} />

      <div className="contentName">
        <div>
          {isDelete ? (
            <TextoComSombra value="Excluir" />
          ) : (
            <TextoComSombra
              isInput={!isDelete}
              value={nome}
              setValue={setNome}
            />
          )}
        </div>

        {participantes && participantes?.length > 1 && (
          <img
            src="/assets/lixeira.svg"
            alt="Lixeira"
            onClick={handleAskDelete}
            className="svg"
          />
        )}

        <strong className={`${isDelete ? '' : 'hidden'}`}>
          <p className="excluir" onClick={handleDelete}>
            ✔
          </p>

          <p className="cancelar" onClick={() => setIsDelete(false)}>
            X
          </p>
        </strong>
      </div>

      <Buttons index={index} />
    </Content>
  );
}
