import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  min-height: 73px;
  max-height: 73px;
  min-width: 73px;
  padding-bottom: 4px;
  background: var(--padrao);
  border: 3px solid white;
  border-radius: 100%;
  margin-left: -2rem;

  em {
    position: absolute;
    top: 2px;
    left: 2px;

    height: 63px;
    width: 63px;
    border: 1px dashed white;
    border-radius: 100%;
  }

  img {
    display: flex;
    align-items: center;

    width: 55px;
  }
`;
