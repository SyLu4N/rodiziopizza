import styled from 'styled-components';

export const Container = styled.main`
  max-width: 550px;
  margin: auto;

  .totem {
    display: block;
    margin: auto;
    width: 150px;
  }

  div {
    div:nth-child(1) {
      strong {
        color: #f5c115;
      }
    }

    div:nth-child(2) {
      strong {
        color: #cbd6dd;
      }
    }

    div:nth-child(3) {
      strong {
        color: #ff893a;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.2rem;
  max-height: 50px;
  position: relative;
  margin-bottom: 1rem;
`;
