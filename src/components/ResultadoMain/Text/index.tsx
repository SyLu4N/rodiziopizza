import { Container } from './styles';

interface TextProps {
  name: string;
}

export function Text({ name }: TextProps) {
  return (
    <Container>
      <h1 className="text">{name}</h1>
      <h1 className="shadow">{name}</h1>
    </Container>
  );
}
