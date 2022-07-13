import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  margin-top: 0.4rem;
  padding-bottom: 3rem;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 80px;
  overflow: hidden;

  h2 {
    padding: 0.5rem;
    max-width: 200px;
    transition: all 300ms;

    font-size: 3rem;
    font-family: 'Carlson';
    text-align: center;
    text-decoration: none;
    font-weight: normal;
    text-shadow: 0px 0px 3px black;
    border-radius: 10px;
    color: white;
    cursor: pointer;

    &:hover {
      text-shadow: 2px 0px 3px black;
    }
  }

  .finishAsk {
    position: relative;

    margin-top: -5rem;
    max-width: 500px;
    font-size: 2.2rem;

    &:hover {
      cursor: default;
      text-shadow: 0px 0px 3px black;
    }
  }
`;

export const Confirm = styled.div`
  strong {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    position: absolute;
    bottom: 2.5rem;
    width: 100%;

    p,
    a {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1rem;
      width: 90px;
      border-radius: 0.3rem;
      height: 25px;
      max-height: 25px;
      transition: all 300ms;

      box-shadow: 0px 0px transparent;
      -webkit-text-stroke-width: 0px;

      &:hover {
        filter: brightness(1.05);
      }
    }

    .cancelar {
      color: white;
      padding-top: 1px;
      background-color: red;
      cursor: pointer;

      &:hover {
        filter: brightness(0.8);
      }
    }

    .excluir {
      color: white;
      padding-top: 1px;
      background-color: var(--letter);
      cursor: pointer;
    }
  }
`;
