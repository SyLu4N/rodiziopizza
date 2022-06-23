import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  padding-left: 10%;
  max-width: none;

  .devoradores {
    div {
      height: 30px;
      width: 110px;
      margin-left: -1.6rem;
    }

    img {
      margin-top: 3rem;
      display: inline-block;
      width: 110px;
    }

    p {
      margin-left: -1.4rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    color: white;

    margin-bottom: 1rem;

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

      width: 320px;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: left;

      width: 80px;
      margin-bottom: 8px;
      margin-left: 2rem;
      font-size: 3rem;
    }
  }
`;
