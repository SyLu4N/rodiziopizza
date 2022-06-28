import { FormEvent, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import Modal from 'react-modal';

import { useParticipantes } from '../../hooks/useParticipantesContext';
import { Container } from './styles';

interface ModalAddProps {
  isModelResult: boolean;
  modelResultClose: () => void;
}

export function ModalAdd({ isModelResult, modelResultClose }: ModalAddProps) {
  const { createParticipante } = useParticipantes();
  const [name, setName] = useState('');

  async function sendForm(e: FormEvent) {
    e.preventDefault();

    const data = {
      nome: name,
    };

    createParticipante(data);
    modelResultClose();
  }

  return (
    <Modal
      isOpen={isModelResult}
      onRequestClose={modelResultClose}
      overlayClassName="overlayModal"
      className="modalContent"
      ariaHideApp={false}
    >
      <Container onSubmit={sendForm}>
        <h1>Adicionar novo participante</h1>

        <label htmlFor="participante">
          Nome:
          <input
            type="text"
            id="participante"
            maxLength={10}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <button className="closeModal" type="button" onClick={modelResultClose}>
          <IoIosClose size={30} />
        </button>

        <button type="submit" disabled={name.length < 3}>
          Adicionar
        </button>
      </Container>
    </Modal>
  );
}
