import styled from 'styled-components';

export const Container = styled.form`
  position: relative;
  color: var(--padrao);

  label {
    display: block;
    margin-top: 1rem;
    font-size: 1.5rem;

    input {
      outline: none;
      display: block;
      border-radius: 0.2rem;
      height: 25px;
      padding-left: 0.3rem;
      font-size: 1.5rem;
      width: 150px;
    }
  }

  .closeModal {
    position: absolute;
    top: -4%;
    right: -25%;

    background-color: transparent;

    svg {
      cursor: pointer;
      color: var(--details);
    }
  }

  button {
    margin-top: 0.7rem;
    height: 25px;
    border-radius: 0.2rem;
    padding: 0 0.4rem;

    background-color: var(--letter);
    color: white;
    transition: all 300ms;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: no-drop;
    }

    &:hover {
      filter: brightness(0.95);
    }
  }
`;
