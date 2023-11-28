import { useRef } from 'react';

import Link from 'next/link';

import { Container, Confirm } from './styles';

interface PushTextProps {
  textMain: string;
  textPush: string;
}

export function PushText({ textMain, textPush }: PushTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const textRef = useRef<HTMLParagraphElement>(null);

  const confirmRef = useRef<HTMLDivElement>(null);

  function askReset() {
    textRef?.current?.classList.add('activeAsk');

    setTimeout(() => {
      confirmRef.current?.classList.remove('hidden');
    }, 200);

    document.addEventListener('click', function ask(e: any) {
      const parentNode = e.target.parentNode;

      if (
        parentNode !== containerRef.current &&
        parentNode !== contentRef.current
      ) {
        document.removeEventListener('click', ask);

        textRef?.current?.classList.remove('activeAsk');

        confirmRef.current?.classList.add('hidden');
      }
    });
  }

  return (
    <Container ref={containerRef}>
      <div className="content" ref={contentRef}>
        <p>{textPush}</p>

        <p onClick={askReset} className="fix" ref={textRef}>
          {textMain}
        </p>
      </div>

      <Confirm>
        <strong className="hidden" ref={confirmRef}>
          <Link href="/resultado">
            <a className="excluir">✔</a>
          </Link>

          <p className="cancelar">X</p>
        </strong>
      </Confirm>
    </Container>
  );
}
