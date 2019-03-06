import React from 'react';
import styled from 'react-emotion';
import SizeChartTable from './SizeChartTable';
import {
  Heading as BaseHeading,
  TextContainer,
  UnorderedList
} from '../shared/Typography';
import { colors, spacing, dimensions } from '../../utils/styles';

const Heading = styled(BaseHeading)`
  margin-bottom: -${spacing.sm}px;
`;

const Section = styled(`section`)`
  padding-top: calc(${dimensions.headerHeight} + ${spacing.sm}px);
`;

const SectionHeading = styled(Heading.withComponent(`h2`))`
  font-size: 1.8rem;
  letter-spacing: -0.01em;
  margin-bottom: ${spacing.sm}px;
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
        <Heading>Product Details</Heading>
        <Section id="size-chart">
          <SectionHeading>Size Chart</SectionHeading>
          <UnitSelector unit={units} setUnits={this.changeUnits} />
          <SizeChartTable unit={units} />
          <p>
            <strong style={{ color: colors.brand }}>
              Don’t see your size?
            </strong>{' '}
            Send us an email team@gatsbyjs.com and we’ll see if we can help!
          </p>
        </Section>
      </TextContainer>
    );
  }
}

export default ProductDetails;
