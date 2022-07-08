import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Markdown from 'react-markdown';
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

const Description = styled(`div`)`
  color: ${colors.text};
  font-size: 1rem;
  line-height: 1.5;
  a {
    color: ${colors.brand};
  }
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

const Variants = styled(`div`)`
  width: 100%;
  justify-content: center;
  > div {
    margin: 0 1rem;
  }
  display: flex;
  align-items: center;
`;

const Variant = styled(`div`)`
  margin-top: ${spacing['md']}px;
  .price {
    display: flex;
    align-items: center;
    justify-content: center;
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
  }
  span {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: ${colors.text};
    font-family: ${fonts.heading};
  }
`;

const PreOrder = styled(`div`)`
  padding: 1rem;
  background: #fafafa;
  margin-bottom: 2rem;
`;

const removeCareInstructions = desc =>
  desc.split(/Care Instructions/).slice(0, 1);

const ProductSpecs = props => {
  const {
    product: {
      title,
      description,
      handle,
      descriptionHtml,
      productType,
      variants
    }
  } = props;

  const hasVariants = variants.length > 1;
  const { price } = variants[0];
  const isPoster = productType === 'poster';
  const isForPreorder = handle === 'party-corgi-tank-top';
  // calculate shipping date for corgi tank tops
  const now = new Date();
  const preSaleEndsDate = new Date('February 28, 2020'); // sale ends on 2/28
  const gap = preSaleEndsDate.getTime() - now.getTime();
  const gapInDays = Math.floor(gap / (1000 * 60 * 60 * 24));
  const deliveryTimeFromNowInDays = 49 + gapInDays; // 7 weeks === 49 days + days left until production starts
  const deliveryTimeFromNowInWeeks = Math.floor(deliveryTimeFromNowInDays / 7); // convert to weeks

  return (
    <ProductSpecsRoot>
      <Name>{title}</Name>
      <Type>{productType}</Type>
      <Description>
        <Markdown escapeHtml={false} source={descriptionHtml} />
      </Description>
      <br />
      {isForPreorder && (
        <PreOrder>
          Ships in{' '}
          {gapInDays > 0 ? (
            <b>
              {deliveryTimeFromNowInWeeks} week
              {deliveryTimeFromNowInWeeks > 1 && 's'}
            </b>
          ) : (
            <b>7 weeks</b>
          )}
        </PreOrder>
      )}
      {hasVariants && isPoster ? (
        <Variants>
          {variants.map(variant => (
            <Variant key={variant.id}>
              <span>{variant.title}</span>
              <div className="price">
                <span>USD</span> ${variant.price}
              </div>
            </Variant>
          ))}
        </Variants>
      ) : (
        <Price>
          <span>USD</span> ${price}
        </Price>
      )}
    </ProductSpecsRoot>
  );
};

ProductSpecs.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductSpecs;
