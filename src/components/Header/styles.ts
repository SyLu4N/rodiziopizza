import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  h1 {
    font-variant: small-caps;
    font-family: 'Alegreya', sans-serif;
    font-size: 3rem;
    color: white;
  }

  svg {
    color: var(--padrao);
    margin-left: 0.8rem;
  }
`;
