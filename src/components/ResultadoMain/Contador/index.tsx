import { Container } from './styles';

interface ContadorProps {
  value: number;
}

export function Contador({ value }: ContadorProps) {
  return (
    <Container>
      <span>{value}</span>
      <img src="/assets/pizza.svg" alt="Pizza" />
    </Container>
  );
}
