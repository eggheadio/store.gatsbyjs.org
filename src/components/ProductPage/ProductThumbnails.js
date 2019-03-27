import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Image from 'gatsby-image';
import Link from '../shared/Link';

import InterfaceContext from '../../context/InterfaceContext';

import { breakpoints, colors, radius, spacing } from '../../utils/styles';

const THUMBNAIL_SIZE = '60px';

const ProductThumbnailsRoot = styled(`div`)`
  height: ${THUMBNAIL_SIZE};
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  width: 100%;

  @media (min-width: ${breakpoints.desktop}px) {
    height: auto;
    overflow-x: hidden;
  }
`;

export const ProductThumbnailsContent = styled(`div`)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding-left: ${spacing.md}px;

  @media (min-width: ${breakpoints.desktop}px) {
    justify-content: center;
    min-width: 100%;
    padding: ${spacing.md}px 0 0;
  }
`;

export const Thumbnail = styled(Link)`
  height: ${THUMBNAIL_SIZE};
  margin-right: ${spacing.sm}px;
  width: ${THUMBNAIL_SIZE};
  border: 1px solid #f1f1f1;
  @media (min-width: ${breakpoints.desktop}px) {
    cursor: pointer;
    margin-right: ${spacing.md}px;
  }
  .gatsby-image-wrapper {
    width: 100%;
  }
`;

class ProductThumbnails extends Component {
  handleClick = (image, callback) => event => {
    event.preventDefault();

    callback(image);
  };

  render() {
    const { images, className = '' } = this.props;

    return (
      <InterfaceContext.Consumer>
        {({ featureProductImage }) => (
          <ProductThumbnailsRoot className={className}>
            <ProductThumbnailsContent>
              {images.map((image, idx) => {
                const {
                  id,
                  localFile: {
                    childImageSharp: { fluid }
                  }
                } = image;

                return (
                  <Thumbnail
                    key={id}
                    onClick={this.handleClick(image, featureProductImage)}
                    to={fluid.src}
                  >
                    <Image fluid={fluid} />
                  </Thumbnail>
                );
              })}
            </ProductThumbnailsContent>
          </ProductThumbnailsRoot>
        )}
      </InterfaceContext.Consumer>
    );
  }
}

ProductThumbnails.propTypes = {
  images: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default ProductThumbnails;
