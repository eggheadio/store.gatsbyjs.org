import React, { Component, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Eggo from '../../assets/eggo.svg';
import PartyEggo from '../../assets/eggo-party.png';
import GlassesEggo from '../../assets/eggo-glasses.png';
import PilotEggo from '../../assets/eggo-pilot.png';
import TamagotchiEggo from '../../assets/eggo-tamagotchi.png';
import WorkerEggo from '../../assets/eggo-worker.png';
import { sample } from 'lodash';

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
  flex-shrink: 0;
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.text};
  margin-right: auto;
  height: 100%;
  h1 {
    display: flex;
    align-items: center;
    font-size: 1.3em;
    letter-spacing: 0.02em;
    font-family: ${fonts.heading};
    padding-top: 5px;
    height: 100%;
  }
  line-height: 1;
  margin: 0;
  img {
    padding-right: ${spacing.sm}px;
    max-width: 50px;
    width: 100%;
    margin: 0;
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
    const { className, logo = `${Eggo}` } = this.state;
    const eggos = {
      1: `${PartyEggo}`,
      2: `${PilotEggo}`,
      3: `${GlassesEggo}`,
      4: `${TamagotchiEggo}`,
      5: `${WorkerEggo}`
    };
    return (
      <HeaderRoot className={className}>
        <HomeLink
          to="/"
          aria-label="Home page"
          onMouseEnter={() => {
            if (this.props.isDesktopViewport) {
              this.setState({
                logo: `${sample(eggos)}`
              });
            } else {
              this.setState({
                logo: `${Eggo}`
              });
            }
          }}
          onMouseLeave={() => {
            this.setState({
              logo: `${Eggo}`
            });
          }}
        >
          <img src={logo} alt="egghead swag store" />
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
