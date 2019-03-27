import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { breakpoints, colors, fonts, spacing } from '../../utils/styles';

const ProductSpecsRoot = styled(`div`)`
  padding: 0 ${spacing.md}px;
  text-align: center;

  @media (min-width: ${breakpoints.tablet}px) {
    padding: ${spacing['2xl']}px ${spacing.md}px 0;
  }
`;

const Name = styled(`h1`)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text};
  font-family: ${fonts.heading};
  font-size: 3rem;
  font-weight: 500;
  margin: 0;
  line-height: 1;
  @media (min-width: ${breakpoints.tablet}px) {
    margin-top: ${spacing.lg}px;
  }
  margin-top: ${spacing['3xl']}px;
`;

const Type = styled(`span`)`
  font-family: ${fonts.heading};
  text-transform: uppercase;
  font-size: 1.25em;
  letter-spacing: 0.05em;
  color: ${colors.textMild};
  margin: 0;
  margin-top: ${spacing.md}px;
  line-height: 0;
`;

const Description = styled(`p`)`
  color: ${colors.text};
  font-size: 1rem;
  line-height: 1.5;
`;

const Price = styled(`div`)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${spacing['2xl']}px;
  color: ${colors.brand};
  font-size: 1.55rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  font-family: ${fonts.monospace};
  span {
    margin-right: ${spacing['xs']}px;
    font-size: 70%;
    color: ${colors.textLight};
  }
`;

const removeCareInstructions = desc =>
  desc.split(/Care Instructions/).slice(0, 1);

const ProductSpecs = props => {
  const {
    product: {
      title,
      description,
      productType,
      variants: [variant]
    }
  } = props;

  const { price } = variant;

  return (
    <ProductSpecsRoot>
      <Name>{title}</Name>
      <Type>{productType}</Type>
      <Description>{removeCareInstructions(description)}</Description>
      <Price>
        <span>USD</span> ${price}
      </Price>
    </ProductSpecsRoot>
  );
};

ProductSpecs.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductSpecs;
