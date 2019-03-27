import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import { MdShoppingCart, MdArrowForward } from 'react-icons/md';
import UserContext from '../../context/UserContext';

import {
  removeCareInstructions,
  cutDescriptionShort
} from '../../utils/helpers';

import {
  breakpoints,
  colors,
  fonts,
  radius,
  spacing,
  animations
} from '../../utils/styles';

const DESCRIPTION_LIMIT = 90;
const TRANSITION_DURATION = '250ms';

const ProductListingItemLink = styled(Link)`
  background: ${colors.lightest};
  border: 1px solid #f1f1f1;
  overflow: hidden;
  text-decoration: none;
  transition: all ${TRANSITION_DURATION};

  @media (hover: hover) {
    :hover {
      background: #ffffff;
      box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.11);
    }
  }
`;

const Item = styled(`article`)`
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: ${spacing.lg}px;
  height: 100%;
  @media (min-width: 1024px) {
    height: ${props => (props.totalCount > '2' ? '100%' : '480px')};
  }
  @media (min-width: 1025px) {
    height: ${props => (props.totalCount > '2' ? '100%' : '660px')};
    max-height: 85vh;
  }
  @media (min-width: 1460px) {
    height: 100%;
    max-height: ${props => (props.totalCount > '2' ? 'auto' : '85vh')};
  }
`;

const Preview = styled(`div`)`
  border-bottom: 1px solid #f1f1f1;
  margin: -${spacing.lg}px;
  margin-bottom: ${spacing['3xl']}px;
  overflow: hidden;
  position: relative;

  .gatsby-image-wrapper {
    transition: all ${TRANSITION_DURATION};
    background: #f1f1f1;
    @media (min-width: ${breakpoints.desktop}px) {
      max-height: 43vmax;
    }
  }

  @media (hover: hover) {
    ${ProductListingItemLink}:hover & {
      .gatsby-image-wrapper {
        //transform: scale(1.1);
      }
    }
  }
`;

const CodeEligibility = styled(`div`)`
  align-items: stretch;
  animation: ${animations.simpleEntry};
  border-radius: ${radius.default}px;
  bottom: 0;
  color: ${colors.lightest};
  display: flex;
  left: ${spacing.lg}px;
  overflow: hidden;
  position: absolute;
  right: ${spacing.lg}px;

  span {
    align-items: center;
    display: flex;
    height: 30px;
    justify-content: center;
  }

  span:first-child {
    background: #999;
    flex-basis: 35%;
    font-size: 0.9rem;
  }

  span:last-child {
    background: ${props =>
      props.freeWith === 'HOLYBUCKETS' ? colors.lemon : colors.brand};
    color: ${props =>
      props.freeWith === 'HOLYBUCKETS' ? colors.brand : colors.lemon};
    flex-basis: 65%;
    font-family: ${fonts.heading};
    font-size: 1rem;
  }
`;

const Name = styled(`h1`)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.text};
  font-family: ${fonts.heading};
  font-size: 1.8rem;
  line-height: 1.2;
  letter-spacing: 0.03em;
  margin: 0;
  min-height: 2.5em;
  span {
    font-size: 70%;
    color: ${colors.textLight};
    font-weight: normal;
  }
`;

const Description = styled(`p`)`
  color: ${colors.text};
  flex-grow: 1;
  font-size: 1rem;
  line-height: 1.5;
`;

const PriceRow = styled(`div`)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${spacing.md}px;
`;

const Price = styled(`div`)`
  font-family: ${fonts.monospace};
  color: ${colors.brand};
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  span {
    color: ${colors.textLight};
    opacity: 0.8;
    font-size: 70%;
    margin-right: ${spacing['2xs']}px;
  }
  @media (hover: hover) {
    ${ProductListingItemLink}:hover & {
      transform: translateY(-10px);
    }
  }
  transition: all ${TRANSITION_DURATION};
`;

const Incentive = styled('div')`
  align-items: center;
  color: ${colors.textLight};
  display: flex;
  font-size: 0.85rem;
  line-height: 1.3;
  opacity: 0;
  text-align: right;
  transition: all ${TRANSITION_DURATION};
  background: ${colors.brandLighter};
  padding: ${spacing.sm}px ${spacing.md}px;
  transform: translateY(65px);
  @media (hover: hover) {
    ${ProductListingItemLink}:hover & {
      transform: translateY(25px);
      opacity: 1;
    }
  }

  > span {
    svg {
      display: inline;
      margin-right: -${spacing['3xs']}px;
      vertical-align: middle;
    }
  }
`;

const CartIcon = styled(`span`)`
  align-items: center;
  background: ${colors.lilac};
  border-radius: ${radius.default}px 0 0 ${radius.default}px;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-left: ${spacing.lg}px;
  position: relative;
  transition: all ${TRANSITION_DURATION};
  vertical-align: middle;
  width: 40px;

  @media (hover: hover) {
    ${ProductListingItemLink}:hover & {
      margin-left: ${spacing.xs}px;
    }
  }

  svg {
    color: ${colors.accent};
    height: 22px;
    position: relative;
    width: 22px;
  }
`;

const ProductListingItem = props => {
  const {
    totalCount,
    product: {
      title,
      handle,
      productType,
      description,
      variants: [firstVariant],
      images: [firstImage]
    }
  } = props;

  const { price } = firstVariant;
  const {
    localFile: {
      childImageSharp: { fluid }
    }
  } = firstImage;

  const freeWith =
    price >= 20 ? 'HOLYBUCKETS' : price >= 10 ? 'BUILDWITHGATSBY' : null;

  return (
    <UserContext.Consumer>
      {() => {
        return (
          <ProductListingItemLink to={`/product/${handle}`}>
            <Item>
              <Preview>
                <Image fluid={fluid} />
              </Preview>
              <Name>
                {title} <span>{productType}</span>
              </Name>
              {description && (
                <Description>
                  {cutDescriptionShort(
                    removeCareInstructions(description),
                    DESCRIPTION_LIMIT
                  )}
                </Description>
              )}
              <PriceRow>
                <Price>
                  <span>USD</span> ${price}
                </Price>
                <Incentive>
                  <span>
                    view details & buy <MdArrowForward />
                  </span>
                  {/* <CartIcon>
                    <MdShoppingCart />
                  </CartIcon> */}
                </Incentive>
              </PriceRow>
            </Item>
          </ProductListingItemLink>
        );
      }}
    </UserContext.Consumer>
  );
};

ProductListingItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListingItem;
