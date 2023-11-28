import { ChangeEvent } from 'react';

import { Container } from './style';

interface TextoComSombraProps {
  value?: string;
  setValue?: (value: string) => void;

  isInput?: boolean;
}

export function TextoComSombra({
  value = '',
  isInput = false,
  setValue,
}: TextoComSombraProps) {
  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    if (setValue) setValue(e.target.value);
  }

  return (
    <Container>
      {isInput ? (
        <input className="shadow" value={value} onChange={handleInput} />
      ) : (
        <p className="shadow">{value}</p>
      )}

      <p className="text">{value}</p>
    </Container>
  );
}
