import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 460px));
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin-top: 5rem;
  padding: 0 1rem;

  .devoradores {
    div {
      position: relative;
      height: 30px;
      width: 110px;
      padding-right: 9rem;
    }

    p {
      margin-left: -4rem;
    }

    img {
      left: -1.3rem;
      position: absolute;
      margin-top: 3rem;
      display: inline-block;
      width: 85px;
    }
  }

  div {
    display: flex;
    align-items: center;
    color: white;

    div {
      width: 65px;

      img {
        width: 60px;
        margin-right: 1rem;
      }
    }

    p {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: left;

      width: 55px;
      margin-bottom: 8px;
      margin-left: 2rem;
      font-size: 3rem;
    }
  }
`;

export const Back = styled.div`
  width: 100%;
  margin-top: 5rem;

  display: flex;
  justify-content: center;

  a {
    max-width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 1.5rem;
    transition: 300ms color;

    svg {
      margin-right: 0.3rem;
    }

    &:hover {
      color: var(--background);
    }
  }
`;
