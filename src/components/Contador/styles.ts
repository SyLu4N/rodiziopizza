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
`;

export const ContentContador = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 70px;
  overflow: hidden;
  transition: all 300ms;

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font-size: 3.5rem;
    color: var(--letter);
    text-shadow: insert 1px 1px black;
    text-align: center;
    height: 60px;
    width: 60px;

    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff;
    margin-bottom: 5px;
    margin-left: 5px;
  }
`;
