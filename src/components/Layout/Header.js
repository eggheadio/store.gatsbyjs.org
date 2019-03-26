import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import Eggo from '../../assets/eggo.svg';

import {
  breakpoints,
  colors,
  dimensions,
  spacing,
  fonts
} from '../../utils/styles';

const HeaderRoot = styled('header')`
  align-items: center;
  background-color: ${colors.lightest};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.11);
  box-sizing: border-box;
  display: ${props => (props.isCovered ? 'none' : 'flex')};
  height: ${dimensions.headerHeight};
  justify-content: space-between;
  left: 0;
  padding-left: ${spacing.md}px;
  padding-right: ${spacing['3xl']}px;
  position: sticky;
  right: 0;
  top: 0;
  z-index: 1000;

  @media (min-width: ${breakpoints.desktop}px) {
    &.covered {
      display: none;
    }
  }
`;

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  //display: block;
  flex-shrink: 0;
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.text};
  margin-right: auto;
  h1 {
    font-size: 1.3em;
    letter-spacing: 0.02em;
    font-family: ${fonts.heading};
    padding-top: 5px;
  }
  line-height: 1;
  margin: 0;
  img {
    margin-right: ${spacing.sm}px;
  }
`;

class Header extends Component {
  state = {
    className: ''
  };

  componentDidUpdate(prevProps) {
    if (this.props.isDesktopViewport) {
      const imageBrowserStatusChanged =
        this.props.productImagesBrowserStatus !==
        prevProps.productImagesBrowserStatus;

      if (imageBrowserStatusChanged) {
        if (this.props.productImagesBrowserStatus === 'open') {
          setTimeout(() => {
            this.setState({
              className: 'covered'
            });
          }, 500);
        } else {
          this.setState({
            className: ''
          });
        }
      }
    }
  }

  render() {
    const { className } = this.state;

    return (
      <HeaderRoot className={className}>
        <HomeLink to="/" aria-label="Home page">
          <img src={Eggo} alt="egghead swag store" />
          <h1>swag store</h1>
        </HomeLink>
      </HeaderRoot>
    );
  }
}

Header.propTypes = {
  productImagesBrowserStatus: PropTypes.string.isRequired,
  isDesktopViewport: PropTypes.bool
};

export default Header;
