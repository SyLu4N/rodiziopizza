import styled from 'styled-components';

export const Container = styled.main`
  background-image: url('/assets/backgroundGreen.png');
  background-size: cover;

  min-height: 100vh;

  padding: 1rem 0;
  padding-bottom: 5rem;

  .totem {
    display: block;
    margin: auto;
    width: 150px;
    margin-bottom: 2rem;
  }
`;

export const Content = styled.div`
  margin: auto;
  max-width: 460px;

  div:nth-child(1) {
    strong {
      font-size: 2.1rem;
      color: #f5c115;

      span {
        font-size: 1.5rem;
      }
    }
  }

  div:nth-child(2) {
    strong {
      font-size: 1.8rem;
      color: #cbd6dd;
    }
  }

  div:nth-child(3) {
    strong {
      color: #ff893a;
    }
  }
`;

export const ContentRank = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.2rem;
  max-height: 50px;
  position: relative;
  margin-bottom: 3rem;
`;
