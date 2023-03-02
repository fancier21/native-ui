const globalStyles = {
  colors: {
    primary: '#007AFF',
    primaryDark: '#0063cc',
    primaryLight: '#3f9cff',
    secondary: '#FF3B30',
    secondaryDark: '#cc2e23',
    secondaryLight: '#ff685c',
    background: '#F5F5F5',
    backgroundDark: '#D5D5D5',
    backgroundLight: '#FFFFFF',
    text: '#333333',
    textDark: '#222222',
    textLight: '#FFFFFF',
    error: '#FF0000',
    errorDark: '#cc0000',
    errorLight: '#ff3b3b',
    success: '#008000',
    successDark: '#006400',
    successLight: '#00cc00',
  },
  fontSizes: {
    xsmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xlarge: 24,
    xxlarge: 32,
  },
  fontWeights: {
    thin: '100',
    light: '200',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  spacing: {
    xsmall: 4,
    small: 8,
    medium: 16,
    large: 24,
    xlarge: 32,
    xxlarge: 48,
  },
  borderRadius: {
    none: 0,
    xsmall: 2,
    small: 4,
    medium: 8,
    large: 16,
    full: 9999,
  },
  boxShadow: {
    small: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,
    },
    none: {
      shadowColor: 'transparent',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    },
  },
  buttonStyles: {
    primary: {
      backgroundColor: '#007AFF',
      borderRadius: 8,
      paddingVertical: 16,
      paddingHorizontal: 32,
    },
    secondary: {
      backgroundColor: '#FF3B30',
      borderRadius: 8,
      paddingVertical: 16,
      paddingHorizontal: 32,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#007AFF',
      borderRadius: 8,
      paddingVertical: 16,
      paddingHorizontal: 32,
    },
  },
  inputStyles: {
    default: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: '#D5D5D5',
      fontSize: 16,
      fontWeight: '400',
      color: '#333333',
    },
    error: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: '#FF0000',
      fontSize: 16,
      fontWeight: '400',
      color: '#333333',
    },
  },
  headerStyles: {
    default: {
      backgroundColor: '#FFFFFF',
      borderBottomWidth: 1,
      borderBottomColor: '#D5D5D5',
      height: 60,
      paddingHorizontal: 16,
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    transparent: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
      height: 60,
      paddingHorizontal: 16,
      paddingVertical: 12,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
};
