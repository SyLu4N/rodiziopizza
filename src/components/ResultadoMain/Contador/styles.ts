import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;

  font-size: 2.5rem;
  color: var(--letter);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;

  position: relative;

  span {
    font-size: 3.4rem;
    z-index: 1;
  }

  img {
    position: absolute;
    width: 70px;
    top: 8%;
  }
`;
