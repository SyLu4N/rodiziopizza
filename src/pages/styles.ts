import styled from 'styled-components';

export const Container = styled.main`
  @font-face {
    font-family: 'Carlson';
    src: url('/assets/Carlson.ttf');
  }

  min-height: 100vh;
  position: relative;
  max-width: 900px;
  margin: auto;

  h1 {
    margin-top: 4rem;
    text-align: center;
  }

  .new {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--letter);
    padding: 0.7rem;
    margin: 2rem 0.2rem 4rem auto;
    height: 40px;
    max-width: 180px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 300ms all;

    &:hover {
      filter: brightness(0.95);
    }
  }

  .finish {
    margin-bottom: auto;
  }
`;
