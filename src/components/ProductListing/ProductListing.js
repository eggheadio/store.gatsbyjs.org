import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'react-emotion';

import ProductListingHeader from './ProductListingHeader';
import ProductListingItem from './ProductListingItem';

import { breakpoints, spacing } from '../../utils/styles';

const ProductListingContainer = styled(`div`)`

   display: flex;
   justify-content: center;
   padding: ${spacing.lg}px;
   flex-direction: column;

   @media (min-width: ${breakpoints.tablet}px) {
    flex-direction: row;
    flex-wrap: wrap;
   }

  @media (min-width: ${breakpoints.desktop}px) {
    
    flex-direction: row;
    flex-wrap: wrap;
    // padding: ${spacing['2xl']}px;
  }

`;

const query = graphql`
  query ProductListingQuery {
    products: allShopifyProduct(sort: { fields: [publishedAt], order: ASC }) {
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
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
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
            <ProductListingItem key={product.id} product={product} />
          ))}
        </ProductListingContainer>
      </>
    )}
  />
);

export default ProductListing;
