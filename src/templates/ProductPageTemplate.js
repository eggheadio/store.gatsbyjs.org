import React from 'react'
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'

import InterfaceContext from '../context/InterfaceContext'
import ProductPage from '../components/ProductPage'

const removeCareInstructions = desc =>
  desc.split(/Care Instructions/).slice(0, 1)

const ProductPageTemplate = props => {
  const {
    site,
    shopifyProduct: product,
    shopifyProduct: {
      title,
      description: fullDescription,
      handle,
      productType,
      variants
    }
  } = props.data

  const description = removeCareInstructions(fullDescription)
  const image = product.images[0].localFile.childImageSharp.fluid.src
  const hasVariants = variants.length > 1
  const isOutOfStock = !hasVariants && !variants[0].availableForSale
  return (
    <InterfaceContext.Consumer>
      {({
        isDesktopViewport,
        productImagesBrowserStatus,
        productImageFeatured,
        toggleProductImagesBrowser,
        setCurrentProductImages
      }) => (
        <>
          <Helmet>
            <title>{title}</title>

            <meta name="description" content={description} />

            <meta
              property="og:url"
              content={`${site.siteMetadata.siteUrl}/product/${handle}`}
            />
            <meta property="og:locale" content="en" />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content="egghead.io Swag Store" />
            <meta property="og:description" content={description} />
            <meta property="og:image:alt" content={title} />
            <meta
              property="og:image"
              content={`https://og-image-react-egghead.now.sh/store/${title}?bgImage=${
                site.siteMetadata.siteUrl
              }${image}`}
            />
            <meta property="twitter:title" content={title} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@gatsbyjs" />
            <meta property="twitter:label1" content="Price" />
            <meta property="twitter.data1" content={`$${variants[0].price}`} />
            <meta property="twitter:label2" content="Availability" />
            <meta
              property="twitter.data2"
              content={isOutOfStock ? 'Out of stock' : 'In stock'}
            />
            <meta
              name="twitter:image"
              content={`https://og-image-react-egghead.now.sh/store/${title}?bgImage=${
                site.siteMetadata.siteUrl
              }${image}`}
            />
          </Helmet>
          <ProductPage
            product={product}
            isDesktopViewport={isDesktopViewport}
            productImagesBrowserStatus={productImagesBrowserStatus}
            productImageFeatured={productImageFeatured}
            toggleProductImagesBrowser={toggleProductImagesBrowser}
            setCurrentProductImages={setCurrentProductImages}
          />
        </>
      )}
    </InterfaceContext.Consumer>
  )
}

export default ProductPageTemplate

export const query = graphql`
  query($handle: String!) {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
    shopifyProduct(handle: {eq: $handle}) {
      id
      title
      handle
      description
      descriptionHtml
      productType
      variants {
        shopifyId
        title
        price
        availableForSale
        id
      }
      images {
        id
        altText
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
`
