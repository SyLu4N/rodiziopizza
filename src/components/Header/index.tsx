import { Container } from './styles';

interface HeaderProps {
  id: string;
}

export function Header({ id }: HeaderProps) {
  return (
    <Container id={id && id}>
      <h1>Hoje vou dar prejuízo!</h1>
    </Container>
  );
}
