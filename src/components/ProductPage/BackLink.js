import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { MdArrowBack } from 'react-icons/md';

import { Button } from '../shared/Buttons';

import { breakpoints, colors, fonts, spacing } from '../../utils/styles';

const BackLinkRoot = styled(`div`)`
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 76%,
    rgba(255, 255, 255, 0.75) 76%,
    rgba(255, 255, 255, 0.75) 82%,
    rgba(255, 255, 255, 0.5) 82%,
    rgba(255, 255, 255, 0.5) 88%,
    rgba(255, 255, 255, 0.25) 88%,
    rgba(255, 255, 255, 0.25) 94%,
    rgba(255, 255, 255, 0) 94%,
    rgba(255, 255, 255, 0) 100%
  );
  bottom: 0;
  left: 0;
  padding: ${spacing.md}px;
  padding-top: ${spacing.lg}px;
  display: flex;
  justify-content: center;
  svg {
    margin-bottom: 2px;
  }
  span {
    margin-top: 2px;
  }
  position: fixed;
  width: 100%;
  transition: opacity 250ms;
  @media (hover: hover) {
    opacity: 0.6;
    :hover {
      opacity: 1;
    }
  }
  opacity: 0.8;
  @media (min-width: ${breakpoints.desktop}px) {
    padding: 0 ${spacing.xl}px;
    position: relative;
  }
`;

const BackToListing = styled(Button)`
  width: 100%;
  border: transparent;
  padding: 0;
  @media (min-width: ${breakpoints.desktop}px) {
    width: auto;
  }
`;

const BackLink = ({ children, className }) => (
  <BackLinkRoot className={className}>
    <BackToListing to="/">
      <MdArrowBack /> <span>{children}</span>
    </BackToListing>
  </BackLinkRoot>
);

BackLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default BackLink;
