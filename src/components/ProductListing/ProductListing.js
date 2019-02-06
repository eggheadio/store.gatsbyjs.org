import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'react-emotion';

import ProductListingHeader from './ProductListingHeader';
import ProductListingItem from './ProductListingItem';

import { breakpoints, spacing } from '../../utils/styles';

const ProductListingContainer = styled(`div`)`
  @media (min-width: ${breakpoints.desktop}px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`;

const ProductListing = () => (
  <StaticQuery
    query={graphql`
      query ProductListingQuery {
        products: allShopifyProduct(
          sort: { fields: [publishedAt], order: ASC }
        ) {
          edges {
            node {
              id
              handle
              title
              description
              productType
              variants {
                shopifyId
                title
                price
                availableForSale
              }
              images {
                id
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910, maxHeight: 910) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ products }) => (
      <>
        {/* <ProductListingHeader /> */}
        <ProductListingContainer>
          {products.edges.map(({ node: product }) => (
            <ProductListingItem key={product.id} product={product} />
          ))}
        </ProductListingContainer>
      </>
    )}
  />
);

export default ProductListing;
