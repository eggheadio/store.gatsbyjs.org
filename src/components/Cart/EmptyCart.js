import React from 'react';
import styled from 'react-emotion';
import { colors, spacing } from '../../utils/styles';
import monocleEggo from '../../assets/monocle-eggo.png';

const EmptyCartRoot = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: center;
`;

const EmptyCartCopy = styled('div')`
  color: ${colors.text};
  margin-top: ${spacing.lg}px;
  max-width: 200px;
  text-align: center;

  p {
    margin: 0;
  }
`;

const EmptyCartImage = styled('img')`
  max-width: 150px;
`;

const EmptyCart = () => (
  <EmptyCartRoot>
    <EmptyCartImage src={monocleEggo} alt="Your cart is empty" />
    <EmptyCartCopy>
      <p>Your cart is empty.</p>
      <p>Treat yourself with some egghead swag.</p>
    </EmptyCartCopy>
  </EmptyCartRoot>
);

export default EmptyCart;
