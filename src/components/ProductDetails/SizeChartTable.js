import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import withProps from 'recompose/withProps';
import { colors } from '../../utils/styles';
import { isEmpty } from 'lodash/isEmpty';

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
  border: 1px solid #f1f4f7;
`;

const ThLeft = styled('th')`
  padding: 4px 20px 4px 20px;
  text-align: left;
  border-bottom: 1px solid #f1f4f7;
`;

const ThBrand = styled('th')`
  //background: ${colors.brand};
  //border-left: 1px solid #0083e8;
  border-bottom: 1px solid #f1f4f7;
  border-left: 1px solid #f1f4f7;
  
  //color: ${colors.lightest};
  -webkit-font-smoothing: antialiased;
  padding: 16px 8px;
  font-size: 0.9rem;
`;

const Tr = styled('tr')`
  border-bottom: ${props => (props.last ? 0 : '1px solid #f1f4f7')};
`;

const Td = styled('td')`
  border-left: 1px solid #f1f4f7;
  padding: 20px 4px;
  text-align: center;
  vertical-align: top;
  font-size: 0.85rem;
`;

const TdLeft = withProps({
  colSpan: '2'
})(styled('td')`
  padding: 4px 8px 4px 10px;
`);

const SizeChartTable = ({ unit }) => {
  const multiplier = unit === 'cm' ? 2.54 : 1;
  const Size = ({ children: value }) => (
    <span className={css({ margin: '0 3px' })}>
      {Math.round(value * multiplier * 10) / 10}
      {unit !== 'cm' && '"'}
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
          </Tr>
          <Tr last>
            <TdLeft>Women's</TdLeft>
            <Td>0–2</Td>
            <Td>2–4</Td>
            <Td>6–8</Td>
            <Td>8–10</Td>
            <Td>10–14</Td>
            <Td>14–18</Td>
            <Td>22-24</Td>
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
