import React from 'react';
import styled, { css } from 'react-emotion';
import SizeChartTable from './SizeChartTable';
import EcoLeaf from '../../assets/eco-leaf.svg';
import {
  Heading as BaseHeading,
  TextContainer,
  UnorderedList
} from '../shared/Typography';
import { colors, fonts, spacing, dimensions } from '../../utils/styles';

const Heading = styled(BaseHeading)`
  margin-bottom: -${spacing.xl}px;
  margin-top: ${spacing.md}px;
  font-family: ${fonts.heading};
`;

const Section = styled(`section`)`
  padding-top: calc(${dimensions.headerHeight} + ${spacing.sm}px);
  h3 {
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-bottom: ${spacing.sm}px;
    font-family: ${fonts.heading};
  }
`;

const SectionHeading = styled(Heading.withComponent(`h2`))`
  font-size: 1.8rem;
  letter-spacing: -0.01em;
  margin-bottom: ${spacing.sm}px;
  text-transform: uppercase;
`;

const UnitWrapper = styled('div')`
  align-items: center;
  display: flex;
  float: right;
  font-size: 0.75rem;
  margin: ${-1 * spacing.lg}px 0 ${spacing.md}px 0;
`;

const UnitOption = styled('div')`
  background: ${props => props.active && colors.brand};
  border-radius: 1em;
  color: ${props => props.active && colors.lightest};
  cursor: pointer;
  margin-right: 0.5em;
  padding: 0.2em 0.5em;

  &:hover {
    background: ${props => !props.active && colors.brandLight};
  }
`;

const UnitsLabel = styled('div')`
  margin-right: 1em;
`;

const UnitSelector = ({ setUnits, unit }) => {
  const handleClick = event => {
    setUnits(event.target.getAttribute('value'));
  };

  return (
    <UnitWrapper>
      <UnitsLabel>Units:</UnitsLabel>
      <UnitOption value="in" active={unit === 'in'} onClick={handleClick}>
        in
      </UnitOption>
      <UnitOption value="cm" active={unit === 'cm'} onClick={handleClick}>
        cm
      </UnitOption>
    </UnitWrapper>
  );
};

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      units: 'in'
    };
    this.changeUnits = this.changeUnits.bind(this);
  }

  changeUnits(units) {
    this.setState({ units });
  }

  render() {
    const { units } = this.state;

    return (
      <TextContainer>
        <Heading>T-Shirt Details</Heading>
        <Section highlight id="size-chart">
          <SectionHeading>Size Chart</SectionHeading>
          <UnitSelector unit={units} setUnits={this.changeUnits} />
          <SizeChartTable unit={units} />
          <p>
            <strong style={{ color: colors.brand }}>
              Don’t see your size?
            </strong>{' '}
            Send us an email support@egghead.io and we’ll see if we can help!
          </p>
        </Section>
        <Section id="materials">
          <div
            css={css({
              display: 'flex',
              alignItems: 'center',
              img: {
                marginRight: spacing.sm
              },
              marginBottom: spacing.lg
            })}
          >
            <img src={EcoLeaf} alt="Leaf Icon" />
            <strong>100% No Sweatshops & Eco-Friendly</strong>
          </div>
          <div
            css={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gridGap: '10px'
            })}
          >
            <div>
              <h3>Men's (Unisex)</h3>
              <p>
                <strong>Color:</strong> Charcoal-Black Triblend
              </p>
              <p>
                <strong>Fabrication:</strong> 70% Airlume combed and ring-spun
                cotton, 15% polyester, 15% rayon.
              </p>
            </div>
            <div>
              <h3>Women's</h3>
              <p>
                <strong>Color:</strong> Dark Grey Heather
              </p>
              <p>
                <strong>Fabrication:</strong> 52% Airlume combed and ring-spun
                cotton, 48% polyester.
              </p>
            </div>
          </div>
        </Section>
      </TextContainer>
    );
  }
}

export default ProductDetails;
