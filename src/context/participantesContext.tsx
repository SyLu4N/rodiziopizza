import { createContext, ReactNode, useState, useEffect } from 'react';

import { Participante } from '../@types/participantes';
interface ConfigProvider {
  children: ReactNode;
}

type ParticipanteData = {
  participantes: Participante[] | null;
  setParticipantes: (value: Participante[]) => void;

  criarParticipante: () => void;
};

export const ParticipantesContext = createContext({} as ParticipanteData);

export function ParticipantesProvider({ children }: ConfigProvider) {
  const [participantes, setParticipantes] = useState<Participante[] | null>(
    null
  );

  useEffect(() => {
    const participantesJSON = localStorage.getItem('PARTICIPANTES');

    if (participantesJSON && participantesJSON === null) {
      return setParticipantes(JSON.parse(participantesJSON));
    }

    setParticipantes([{ id: Math.random().toFixed(5), nome: '', fatias: 0 }]);
  }, []);

  useEffect(() => {
    if (participantes) return;

    localStorage.setItem('PARTICIPANTES', JSON.stringify(participantes));
  }, [participantes]);

  async function criarParticipante() {
    if (!participantes || participantes === null) return;

    const participante: Participante = {
      id: Math.random().toFixed(5),
      nome: '',
      fatias: 0,
    };

    const newParticipantes = [...participantes];
    newParticipantes.push(participante);
    setParticipantes(newParticipantes);
  }

  return (
    <ParticipantesContext.Provider
      value={{
        participantes,
        setParticipantes,

        criarParticipante,
      }}
    >
      {children}
    </ParticipantesContext.Provider>
  );
}
