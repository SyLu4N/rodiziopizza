import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;

  position: relative;
  height: 120px;
  transition: all 300ms;
  padding-bottom: 1rem;

  font-family: 'Carlson';
  text-align: center;
  text-decoration: none;
  font-weight: normal;
  line-height: 35px;
  text-shadow: 0px 0px 3px black;
  color: white;
  font-size: 2rem;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-bottom: 1%;

    overflow: hidden;

    height: 40px;
  }

  .activeAsk {
    transition: all 300ms;

    margin-bottom: -12%;
  }

  .fix {
    padding-top: 0.5rem;
    cursor: pointer;

    transition: all 300ms;

    &:hover {
      text-shadow: 2px 0px 3px black;
    }
  }
`;

export const Confirm = styled.div`
  strong {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-shadow: none;
    font-family: normal;

    position: absolute;
    width: 100%;
    bottom: -8px;
    left: 0;

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
