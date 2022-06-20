import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-left: 2rem;
  margin-top: 0.8rem;
  max-height: 70px;

  img {
    width: 60px;
    cursor: pointer;
    transition: all 300ms;

    &:hover {
      filter: brightness(0.95);
    }
  }
`;
