import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 3.5rem;
  border-bottom: 1px solid var(--details);

  h1 {
    font-variant: small-caps;
    font-family: 'Alegreya', sans-serif;
    font-size: 2.5rem;
    color: var(--letter);

    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
  }

  svg {
    color: var(--padrao);
    margin-left: 0.8rem;
  }
`;
