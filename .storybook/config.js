import { forEach } from 'ramda';
import { configure, addParameters, } from '@storybook/react';
import storybookTheme from './storybookTheme';
import theme from '../components/theme';

const viewPortList = {}; 
theme.breakpoint && forEach(bp => {
  viewPortList[bp] = {
    name: `${bp}`,
    styles: {
      width: `${theme.breakpoint[bp]}px`,
      height: `100%`,
    },
  };
}, Object.keys(theme.breakpoint));

const req = require.context('../components', true, /.stories.js$/);
const loadStories = () => {
  // require('./custom');
  req.keys().forEach(filename => req(filename));
}

addParameters({
  viewport: {
    viewports: viewPortList,
  },
  options: {
    theme: storybookTheme,
  },
});

configure(loadStories, module);
