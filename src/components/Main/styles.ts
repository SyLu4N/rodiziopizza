import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  margin: auto;
  height: 80vh;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--letter);
    padding: 0.7rem;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: 0.2rem;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 300ms all;

    &:hover {
      filter: brightness(0.95);
    }
  }
`;

export const Content = styled.div`
  h1 {
    text-align: center;
    color: white;

    width: 200px;
    background-color: #fe5949;
    border-radius: 10px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    padding: 0.2rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 3rem;
      color: var(--letter);
      text-shadow: insert 1px 1px black;

      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #fff;

      position: relative;
      min-height: 60px;
      max-height: 60px;
      min-width: 60px;
      padding-bottom: 4px;
      background: var(--padrao);
      border: 3px solid white;
      border-radius: 100%;

      em {
        position: absolute;
        top: 2px;

        height: 50px;
        width: 50px;
        border: 1px dashed white;
        border-radius: 100%;
      }
    }

    p {
      display: flex;
      align-items: center;
      justify-content: center;

      color: var(--letter);
      font-size: 2.5rem;

      position: relative;
      background-color: var(--details);
      box-shadow: 5px 6px var(--padrao);
      width: 70%;
      cursor: default;

      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #fff;

      strong {
        display: none;
        align-items: center;
        gap: 0.3rem;
        position: absolute;

        right: 5px;
        p {
          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 1rem;
          width: 25px;
          border-radius: 0.3rem;
          height: 25px;

          box-shadow: 0px 0px transparent;
          -webkit-text-stroke-width: 0px;
        }

        .cancelar {
          color: white;
          padding-top: 1px;
          background-color: red;
        }

        .excluir {
          color: white;
          padding-top: 1px;
          background-color: var(--letter);
        }
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;
      min-height: 60px;
      min-width: 60px;
      background: var(--padrao);
      border: 3px solid white;
      border-radius: 100%;
      cursor: pointer;
      transition: 300ms all;

      &:hover {
        filter: brightness(0.95);
      }

      em {
        position: absolute;
        top: 2px;
        left: 2px;

        height: 50px;
        width: 50px;
        border: 1px dashed white;
        border-radius: 100%;
      }
    }
  }
`;
