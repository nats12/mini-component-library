import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <StyledSelect value={value} onChange={onChange} role='select'>
        {children}
      </StyledSelect>
      <Icon id="chevron-down" size="small" strokeWidth={2} /> 
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  display: flex;
  position: relative;
  width: max-content;
  justify-content: space-between;

  #chevron-down {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    width: 20px;
    color: ${COLORS.gray700};
  }

  &:hover {
    * {
      color: ${COLORS.black};
    } 
  }

`

const StyledSelect = styled.select`
  background-color: ${COLORS.transparentGray15};
  height: 43px;
  padding: 12px 16px;
  padding-right: 35px;
  color: ${COLORS.gray700};
  border: none;
  border-radius: 8px;
  appearance: none;
`
export default Select;
