import { useRef } from 'react';

import Link from 'next/link';

import { Container, Confirm, Content } from './styles';

interface PushTextProps {
  textMain: string;
  textPush: string;
}

export function PushText({ textMain, textPush }: PushTextProps) {
  const confirmRef = useRef<HTMLDivElement>(null);
  const ContentRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const pushTextAskRef = useRef<HTMLHeadingElement>(null);

  function askReset() {
    if (!pushTextAskRef.current) return;

    pushTextAskRef.current.style.marginTop = '0';

    setTimeout(() => {
      confirmRef.current?.classList.remove('hidden');
    }, 200);

    document.addEventListener('click', function ask(e: any) {
      if (!pushTextAskRef.current) return;

      if (
        e.target.parentNode !== divRef.current &&
        e.target.parentNode !== ContentRef.current
      ) {
        document.removeEventListener('click', ask);
        confirmRef.current?.classList.add('hidden');
        pushTextAskRef.current.style.marginTop = '-5rem';
      }
    });
  }

  return (
    <Container ref={divRef}>
      <Content ref={ContentRef}>
        <h2 className="pushTextAsk" ref={pushTextAskRef}>
          {textPush}
        </h2>

        <h2 onClick={askReset}>{textMain}</h2>
      </Content>

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
