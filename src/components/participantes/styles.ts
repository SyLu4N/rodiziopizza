import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;

  position: relative;

  margin-top: 3rem;
  margin-bottom: 0.7rem;

  .contentName {
    display: flex;
    align-items: center;

    font-size: 2.5rem;

    position: relative;
    background-color: var(--details);
    box-shadow: 5px 6px var(--padrao);

    margin-top: 1rem;
    padding: 0 30px 0 30px;
    min-width: 400px;
    height: 55px;

    div {
      width: 100%;
      padding-bottom: 1px;
    }

    img {
      margin-left: auto;
      width: 25px;
      cursor: pointer;
    }
  }

  strong {
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;

    font-size: 20px;

    position: absolute;
    right: 8.5em;
    bottom: -20px;

    p {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 30px;
      width: 30px;

      border-radius: 6px;
      cursor: pointer;
      color: white;
    }

    .cancelar {
      background-color: red;
    }

    .excluir {
      background-color: var(--letter);
    }
  }
`;
