import React from 'react';
import styled, { css } from 'react-emotion';
import withProps from 'recompose/withProps';
import { colors } from '../../utils/styles';

const ResponsiveTable = styled('div')`
  display: block;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  overflow-x: auto;
  width: 100%;
`;

const Table = styled('table')`
  border-collapse: collapse;
  max-width: 100%;
  min-width: 600px;
  width: 100%;
`;

const ThLeft = styled('th')`
  padding: 4px 8px 4px 0;
  text-align: left;
`;

const ThBrand = styled('th')`
  background: ${colors.brand};
  border-left: 1px solid #9d7cbf;
  color: ${colors.lightest};
  -webkit-font-smoothing: antialiased;
  padding: 8px 0;
`;

const Tr = styled('tr')`
  border-bottom: ${props => (props.last ? 0 : '1px solid #e0d6eb')};
`;

const Td = styled('td')`
  border-left: 1px solid #f5f3f7;
  padding: 8px 4px;
  text-align: center;
  vertical-align: top;
`;

const TdLeft = withProps({
  colSpan: '2'
})(styled('td')`
  padding: 4px 8px 4px 0;
`);

const SizeChartTable = ({ unit }) => {
  const multiplier = unit === 'cm' ? 2.54 : 1;
  const Size = ({ children: value }) => (
    <span className={css({ margin: '0 3px' })}>
      {Math.round(value * multiplier * 10) / 10}
      {unit === 'cm' ? '' : '"'}
    </span>
  );

  return (
    <ResponsiveTable>
      <Table>
        <tbody>
          <tr>
            <ThLeft>Style</ThLeft>
            <ThBrand>Sizes</ThBrand>
            <ThBrand>XS</ThBrand>
            <ThBrand>S</ThBrand>
            <ThBrand>M</ThBrand>
            <ThBrand>L</ThBrand>
            <ThBrand>XL</ThBrand>
            <ThBrand>2XL</ThBrand>
            <ThBrand>3XL</ThBrand>
            <ThBrand>4XL</ThBrand>
          </tr>
          <Tr>
            <TdLeft>Men's</TdLeft>
            <Td>
              <Size>31</Size>-<Size>34</Size>
            </Td>
            <Td>
              <Size>34</Size>–<Size>37</Size>
            </Td>
            <Td>
              <Size>38</Size>–<Size>41</Size>
            </Td>
            <Td>
              <Size>42</Size>–<Size>45</Size>
            </Td>
            <Td>
              <Size>46</Size>–<Size>49</Size>
            </Td>
            <Td>
              <Size>50</Size>–<Size>53</Size>
            </Td>
            <Td>
              <Size>54</Size>–<Size>57</Size>
            </Td>
            <Td>
              <Size>58</Size>–<Size>61</Size>
            </Td>
          </Tr>
          <Tr last>
            <TdLeft>Women's</TdLeft>
            <Td>-</Td>
            <Td>2–4</Td>
            <Td>6–8</Td>
            <Td>8–10</Td>
            <Td>10–14</Td>
            <Td>14–18</Td>
            <Td>22-24</Td>
            <Td>-</Td>
          </Tr>
          {/* <Tr>
            <TdLeft>Women Body Length</TdLeft>
            <Td>
              <Size>25.375</Size>–<Size>26.5</Size>
            </Td>
            <Td>
              <Size>26</Size>–<Size>27</Size>
            </Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>—</Td>
          </Tr>
          <Tr last>
            <TdLeft>Women Chest</TdLeft>
            <Td>
              <Size>29.5</Size>–<Size>32.5</Size>
            </Td>
            <Td>
              <Size>31.5</Size>–<Size>34.5</Size>
            </Td>
            <Td>—</Td>
            <Td>—</Td>
            <Td>—</Td>
          </Tr> */}
        </tbody>
      </Table>
    </ResponsiveTable>
  );
};

export default SizeChartTable;
