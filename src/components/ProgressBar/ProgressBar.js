/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size}) => {

  return <ProgressBarWrapper size={size}>
   <StyledProgressBar value={value} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
    <VisuallyHidden>{value}</VisuallyHidden>
  </StyledProgressBar>
  </ProgressBarWrapper>
};

const ProgressBarWrapper = styled.div`
  position: relative;
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: ${props => props.size === 'large' ? '4px' : '0px'};
  height: ${props => props.size === 'large' ? '24px' : (props.size === 'medium' ? '12px' : '8px')};
`
const StyledProgressBar = styled.div`
  background-color: ${COLORS.primary};
  width: ${props => props.value}%;
  border-radius: 4px 0px 0px 4px;
  height: 100%;
  min-height: 100%;
`


export default ProgressBar;
