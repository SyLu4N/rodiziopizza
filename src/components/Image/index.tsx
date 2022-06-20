import { Container } from './styles';

export function Image() {
  return (
    <Container>
      <abbr title="Adicionar">
        <img src="/assets/pizza.svg" alt="Pizza" />
        <em></em>
      </abbr>
    </Container>
  );
}
