import React, { createContext, useEffect, useState, ReactNode } from 'react';

interface participanteProvider {
  children: ReactNode;
}

export interface Participante {
  nome: string;
  contador: number;
}

type ParticipanteData = { nome: string };

interface ParticipantesProps {
  participantes: Array<Participante>;
  createParticipante: (value: ParticipanteData) => void;
  setParticipante: (value: Participante[]) => void;
}

export const ParticipantesContext = createContext<ParticipantesProps>(
  {} as ParticipantesProps
);

export function ParticipantesProvider({ children }: participanteProvider) {
  const [participantes, setParticipantes] = useState<Participante[]>([]);

  useEffect(() => {
    const participantesStorage = localStorage.getItem('PARTICIPANTES') as any;
    const newParticipantesStorage = JSON.parse(participantesStorage);
    setParticipantes(newParticipantesStorage || '');
  }, [setParticipantes]);

  async function createParticipante(value: ParticipanteData) {
    const data = {
      nome: value.nome,
      contador: 0,
    };

    const newParticipantes = [...participantes, data];
    localStorage.setItem('PARTICIPANTES', JSON.stringify(newParticipantes));
    setParticipantes(newParticipantes);
  }

  async function setParticipante(value: Participante[]) {
    value.map((participante) => {
      if (participante.contador < 0) participante.contador = 0;
    });

    localStorage.setItem('PARTICIPANTES', JSON.stringify(value));
    setParticipantes(value);
  }

  return (
    <ParticipantesContext.Provider
      value={{ participantes, createParticipante, setParticipante }}
    >
      {children}
    </ParticipantesContext.Provider>
  );
}
