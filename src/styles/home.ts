import styled from 'styled-components';

export const Container = styled.main`
  @font-face {
    font-family: 'Carlson';
    src: url('/assets/Carlson.ttf');
  }

  min-height: 100vh;
  position: relative;
  max-width: 900px;
  padding-bottom: 20px;
  margin: auto;

  h1 {
    margin-top: 4rem;
    text-align: center;
  }

  .new {
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 300ms all;
    cursor: pointer;

    background-color: var(--letter);
    border-radius: 10px;
    color: white;

    padding: 0.7rem;
    margin: 2rem 0.2rem 4rem auto;
    height: 40px;
    max-width: 180px;

    &:hover {
      filter: brightness(0.95);
    }

    @media (max-width: 500px) {
      padding: 0.2rem;
      font-size: 14px;
      border-radius: 4px;

      max-width: 150px;
      height: 25px;
    }
  }

  .finish {
    margin-bottom: auto;
  }
`;
