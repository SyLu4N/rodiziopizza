import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  margin-top: 0.4rem;
  padding-bottom: 3rem;

  a {
    padding: 0.5rem;
    max-width: 200px;
    transition: all 150ms;

    font-size: 3.5rem;
    font-family: 'Carlson';
    text-decoration: none;
    text-shadow: 0px 0px 3px black;
    border-radius: 10px;
    color: white;

    &:hover {
      text-shadow: 2px 0px 3px black;
    }
  }
`;
