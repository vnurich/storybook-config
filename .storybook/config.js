import { forEach } from 'ramda';
import { configure, addParameters, } from '@storybook/react';
import theme from './storybookTheme';
import projectTheme from '../components/theme';

const viewports = {}; 
projectTheme.breakpoint && forEach(bp => {
  viewports[bp] = {
    name: `${bp}`,
    styles: {
      width: `${projectTheme.breakpoint[bp]}px`,
      height: `100%`,
    },
  };
}, Object.keys(projectTheme.breakpoint));

const req = require.context('../components', true, /.stories.js$/);
const loadStories = () => {
  // require('./first');
  forEach(filename => req(filename), req.keys());
}

addParameters({
  viewport: {
    viewports,
  },
  options: {
    theme,
  },
});

configure(loadStories, module);
