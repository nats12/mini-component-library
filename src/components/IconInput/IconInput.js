import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  let InputComponent;
  if (size === 'small') {
    InputComponent = SmallInput
  } else {
    InputComponent = LargeInput
  }

  return (
    <InputWrapper>
      <VisuallyHidden>
        <label for="name">{label}</label>
      </VisuallyHidden>
      <InputIconWrapper>
        {icon ? <Icon id="search" size={size === 'small' ? 14 : 20} /> : null}
        <InputComponent type="text" id="name" name="name" width={width} required
          placeholder={placeholder} />
      </InputIconWrapper>
    </InputWrapper>
  )
};

const Input = styled.input`
  width: ${props => props.width ? props.width : 250}px;
  border: none;
  border-bottom: 1px solid;
  color: ${COLORS.gray700};
  padding-left: 20px;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: lighter;
  }

  &:hover {
    color: ${COLORS.black}
  }
`

const SmallInput = styled(Input)`
  font-size: 14px;
`
const LargeInput = styled(Input)`
  font-size: 18px;
  border-bottom: 2px solid;
`

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 50%;
`

const InputIconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    left: 14px;
    color: ${COLORS.gray700};
  }
`
export default IconInput;
