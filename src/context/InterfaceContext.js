import React from 'react';

export const defaultInterfaceContext = {
  isDesktopViewport: null,
  cartStatus: 'initial',
  toggleCart: () => {},
  productImageFeatured: null,
  featureProductImage: () => {},
  currentProductImages: [],
  setCurrentProductImages: () => {},
  productImagesBrowserStatus: 'initial',
  toggleProductImagesBrowser: () => {}
};

export default React.createContext(defaultInterfaceContext);
