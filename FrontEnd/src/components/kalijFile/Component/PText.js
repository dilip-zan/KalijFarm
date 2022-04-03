import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  margin: 0 auto;
  padding: 0.5rem 1rem;
  font-family: 'RobotoMono Regular';
  font-size: 1.1rem;
  line-height: 1.5em;
  
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}