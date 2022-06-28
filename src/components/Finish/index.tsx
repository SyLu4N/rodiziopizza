import { useRef, useState } from 'react';

import { Container } from './styles';

export function Finish() {
  const [isReset, setIsReset] = useState<boolean>(false);
  const confirmRef = useRef<HTMLDivElement>(null);
  const h3Ref = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  function askReset() {
    setIsReset(true);
    confirmRef.current?.classList.remove('hidden');

    document.addEventListener('click', function ask(e: any) {
      if (
        e.target.parentNode !== divRef.current &&
        e.target.parentNode !== h3Ref.current
      ) {
        document.removeEventListener('click', ask);
        confirmRef.current?.classList.add('hidden');
        setIsReset(false);
      }
    });
  }

  return (
    <Container ref={divRef} isReset={isReset}>
      <h1 className="finish" onClick={askReset}>
        {isReset ? 'Finalizar Rodízio?' : 'Finalizar'}
      </h1>
      <div>
        <strong className="hidden" ref={confirmRef}>
          <a className="excluir" href="/resultado">
            ✔
          </a>
          <p className="cancelar">X</p>
        </strong>
      </div>
    </Container>
  );
}
