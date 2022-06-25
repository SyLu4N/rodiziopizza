import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
