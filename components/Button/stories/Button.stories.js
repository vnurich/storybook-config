import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, } from '@storybook/addon-actions';
import { withKnobs, text, } from '@storybook/addon-knobs';
import themeDecorator from '../../themeDecorator';
import Button from '../';

const testActions = {
  onClick: action('onClick'),
};

const testText = () => {
  const label = `Button text`;
  const defaultValue = 'Button';
  const groupId = 'g01';
  return text(label, defaultValue, groupId);
};

storiesOf('Button', module)
  .addDecorator(themeDecorator)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Button {...testActions}>
      { testText() }
    </Button>  
  ))
