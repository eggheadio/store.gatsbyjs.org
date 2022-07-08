import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';

import { colors, radius } from '../../utils/styles';

const CartThumbailRoot = styled(GatsbyImage)`
  border: 1px solid ${colors.brandLight};
  border-radius: ${radius.default}px;
  height: 36px;
  width: 36px;
`;

const CartThumbail = ({
  shopifyImages,
  id: imageId,
  fallback,
  ...imageProps
}) => {
  const image = shopifyImages.find(({ shopifyId }) => shopifyId === imageId);

  return (
    <CartThumbailRoot image={image.gatsbyImageData} alt={image.altText || ''} />
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      {
        allShopifyProduct {
          edges {
            node {
              images {
                id
                shopifyId
                src
                gatsbyImageData
              }
            }
          }
        }
      }
    `}
    render={({ allShopifyProduct: { edges } }) => {
      const images = edges
        .map(({ node }) => node.images)
        .reduce((acc, val) => acc.concat(val), []);

      return <CartThumbail shopifyImages={images} {...props} />;
    }}
  />
);
