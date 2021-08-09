import {StyleSheet} from 'react-native';

const useMainStyles = themeState => {
  const {isDark, light, dark, lightCard} = themeState;

  return StyleSheet.create({
    main: {
      backgroundColor: isDark ? dark : light,
      height: '100%',
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: isDark ? dark : lightCard,
      height: 70,
      shadowColor: isDark ? light : dark,
      elevation: 24,
      borderBottomEndRadius: 24,
      borderBottomStartRadius: 24,
      padding: 5,
      marginBottom: 12,
    },
    createForm: {
      position: 'absolute',
      width: '100%',
      padding: 12,
      paddingTop: 27,
      backgroundColor: themeState.secondary,
      borderTopEndRadius: 24,
      borderTopStartRadius: 24,
      shadowColor: isDark ? light : dark,
      elevation: 24,
    },
  });
};

export default useMainStyles;
