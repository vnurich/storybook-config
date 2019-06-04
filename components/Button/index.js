import React from 'react';
import { withTheme } from 'styled-components';
import StyledButton from './style';
import { compose } from 'ramda';

const Button = props => {
  const { children } = props;
  return <StyledButton {...props}>{ children || 'Button' }</StyledButton>
}

export default compose(withTheme)(Button);
