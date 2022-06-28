import styled from 'styled-components';

interface ContainerProps {
  isReset: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  margin-top: 0.4rem;
  padding-bottom: 3rem;
  position: relative;

  h1 {
    padding: 0.5rem;
    max-width: ${({ isReset }) => (isReset ? '300px' : '200px')};
    transition: text-shadow 500ms;

    font-size: ${({ isReset }) => (isReset ? '2rem' : '3rem')};
    font-family: 'Carlson';
    text-align: center;
    text-decoration: none;
    font-weight: normal;
    margin: auto;
    height: 75px;
    text-shadow: 0px 0px 3px black;
    border-radius: 10px;
    color: white;
    cursor: pointer;

    &:hover {
      text-shadow: 2px 0px 3px black;
    }
  }

  div {
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
  }
`;
