import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 320px;
  text-align: left;
  font-size: 2rem;

  .text {
    color: red;
    text-shadow: none;
    margin-left: 0.2rem;
    margin-top: 0.4rem;
  }

  .shadow {
    position: absolute;
    top: 4%;
    margin-right: 3px;
    color: white;
    text-shadow: 2px 2px #91b23b;
  }
`;
