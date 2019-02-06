import React from 'react';
import styled, { css } from 'react-emotion';
import { colors, spacing } from '../../utils/styles';

import iscreamEggo from '../../assets/iscreamEggo.png';

const EmptyCartRoot = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: center;
`;

const SadCartCopy = styled('div')`
  color: ${colors.brand};
  margin-top: ${spacing.lg}px;
  max-width: 200px;
  text-align: center;

  p {
    margin: 0;
  }
`;

const SadCart = () => (
  <img
    src={iscreamEggo}
    alt="Your cart is empty."
    className={css`
      max-width: 140px;
    `}
  />
);

const EmptyCart = () => (
  <EmptyCartRoot>
    <SadCart />
    <SadCartCopy>
      <p>Your Cart is empty.</p>
    </SadCartCopy>
  </EmptyCartRoot>
);

export default EmptyCart;
