import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url('/assets/tomato.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 90px;
  min-width: 90px;
  margin-right: -2rem;
  z-index: 1;

  p {
    font-size: 3rem;
    color: var(--letter);
    text-shadow: insert 1px 1px black;

    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
    margin-bottom: 5px;
    margin-left: 5px;
  }
`;
