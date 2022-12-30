import colors from './colors';
import fonts from './fonts';

const theme = {
  colors: {
    ...colors,
  },
  fonts: {
    ...fonts,
  },
  // fontFamily: {
  //   ...fontFamily,
  // },
  roundness: 20,
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 1,
  },
  svgSize: 190,
};

export default theme;