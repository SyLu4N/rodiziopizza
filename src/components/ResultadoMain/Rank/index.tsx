import { Container } from './styles';

interface RankProps {
  rank: number;
}

export function Rank({ rank }: RankProps) {
  return (
    <Container>
      {rank++}
      <span>{rank === 2 && 'st'}</span>
      <span>{rank === 3 && 'nd'}</span>
      <span>{rank > 3 && 'th'}</span>
    </Container>
  );
}
