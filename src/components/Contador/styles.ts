import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90px;
  margin-right: -2rem;

  position: relative;
  z-index: 1;

  img {
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 70px;
    background-size: unset;
  }
`;

export const ContentContador = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 70px;
  overflow: hidden;
  transition: all 300ms;

  position: absolute;

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

  @media (max-width: 500px) {
    height: 50px;

    p {
      font-size: 2.7rem;
    }
  }
`;
