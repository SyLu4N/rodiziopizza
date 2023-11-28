import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 100%;

  p,
  input {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 50px;

    font-size: 2.5rem;
    font-family: 'Alegreya';
    text-align: center;

    background-color: transparent;
  }

  input {
    outline: transparent;

    &:focus {
      border: 1px solid red;
      border-radius: 4px;
    }
  }

  .text {
    display: flex;
    color: red;
    margin-left: 0.2rem;
    margin-top: 0.4rem;
  }

  .shadow {
    position: absolute;
    color: white;
    text-shadow: 2px 2px #91b23b;
  }
`;
