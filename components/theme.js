export default {
  gap: {
    base: 1,
  },
  
  font: {
    family: {
      main: `'PT Sans', sans-serif`,
    },
    size: {
      xs: 1.2,
      sm: 1.4,
      md: 1.6,
      lg: 1.8,
      xl: 2,
    },
  },

  border: {
    width: {
      base: 1,
    },
    radius: {
      small: 5,
      base: 10,
      big: 15,
    },
  },
  
  breakpoints: {
    xs: 480,
    sm: 700,
    md: 879,
    base: 999,
    lg: 1199,
    tv: 1380,
  },

  color: {
    brand: '#01999a',
    link: '#101456',
  },

  transition: {
    duration: {
      base: 0.3,
    },
    function: {
      cubic: '.25, .8, .25, 1',
    }
  }

};
