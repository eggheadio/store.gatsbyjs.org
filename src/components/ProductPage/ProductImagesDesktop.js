import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import ProductImage from './ProductImage';
import ProductThumbnails, { Thumbnail } from './ProductThumbnails';

import { spacing } from '../../utils/styles';

const THUMBNAIL_SIZE = '54px';

const ProductImagesDesktopRoot = styled(`div`)`
  margin: 0 ${spacing.lg}px;
  //display: flex;
`;

const Thumbnails = styled(ProductThumbnails)`
  ${Thumbnail} {
    margin-bottom: ${spacing.sm}px;
    height: ${THUMBNAIL_SIZE};
    width: ${THUMBNAIL_SIZE};
  }
`;

const ProductImagesDesktop = ({ images, imageFeatured, imageOnClick }) => {
  const image = images[0];

  return (
    <ProductImagesDesktopRoot>
      <ProductImage
        image={imageFeatured ? imageFeatured : image}
        onClick={imageOnClick}
      />
      <Thumbnails images={images} />
    </ProductImagesDesktopRoot>
  );
};

ProductImagesDesktop.propTypes = {
  images: PropTypes.array.isRequired,
  imageOnClick: PropTypes.func,
  imageFeatured: PropTypes.object
};

export default ProductImagesDesktop;
