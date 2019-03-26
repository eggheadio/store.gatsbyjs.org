import React from 'react';
import styled from 'react-emotion';

import { breakpoints, colors, fonts, spacing } from '../../utils/styles';

const ProductListingHeaderRoot = styled(`header`)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 40em;
  padding: ${spacing.lg}px;
  text-align: center;
`;

const Title = styled(`h1`)`
  color: ${colors.text};
  font-family: ${fonts.heading};
  font-size: 2.4rem;
  letter-spacing: 0.02em;
  line-height: 1;
  margin: 0;
  margin-top: ${spacing.md}px;

  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 3rem;
  }
`;

const ProductListingHeader = () => (
  <ProductListingHeaderRoot>
    <Title>Get egghead Swag!</Title>
  </ProductListingHeaderRoot>
);

export default ProductListingHeader;
