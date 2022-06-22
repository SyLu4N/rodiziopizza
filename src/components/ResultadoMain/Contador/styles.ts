import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;

  font-size: 2.5rem;
  color: var(--letter);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;

  position: relative;

  span {
    z-index: 1;
  }

  img {
    position: absolute;
    width: 50px;
    top: 8%;
  }
`;
