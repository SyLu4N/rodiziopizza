import { useContext } from 'react';

import { ParticipantesContext } from '../context/participantesContext';

export function useParticipantes() {
  const { criarParticipante, participantes, setParticipantes } =
    useContext(ParticipantesContext);

  return { criarParticipante, participantes, setParticipantes };
}
