import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import ProductListingHeader from './ProductListingHeader';
import ProductListingItem from './ProductListingItem';

import { breakpoints, spacing } from '../../utils/styles';

const ProductListingContainer = styled(`div`)`

display: grid;
grid-gap: 30px;
padding: 30px;

@media (min-width: ${breakpoints.desktop}px) {
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr) );
}
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr) );

  //  display: flex;
  //  justify-content: center;
  //  padding: ${spacing.lg}px;
  //  flex-direction: column;

  //  @media (min-width: ${breakpoints.tablet}px) {
  //   flex-direction: row;
  //   flex-wrap: wrap;
  //  }

  // @media (min-width: ${breakpoints.desktop}px) {
    
  //   flex-direction: row;
  //   flex-wrap: wrap;
  //   // padding: ${spacing['2xl']}px;
  // }

`;

const query = graphql`
  query ProductListingQuery {
    products: allShopifyProduct(sort: { fields: [publishedAt], order: ASC }) {
      totalCount
      edges {
        node {
          id
          handle
          title
          description
          productType
          variants {
            id
            shopifyId
            title
            price
            availableForSale
          }
          images {
            id
            src
            altText
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const ProductListing = () => (
  <StaticQuery
    query={query}
    render={({ products }) => (
      <>
        {/* <ProductListingHeader /> */}
        <ProductListingContainer>
          {products.edges.map(({ node: product }) => (
            <ProductListingItem
              key={product.id}
              product={product}
              totalCount={products.totalCount}
            />
          ))}
        </ProductListingContainer>
      </>
    )}
  />
);

export default ProductListing;
