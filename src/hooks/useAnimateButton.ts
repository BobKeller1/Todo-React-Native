import {useCallback} from 'react';
import {Animated} from 'react-native';
import Value = Animated.Value;

const useAnimateButton = (
  buttonAnim: Value,
  useNativeDriver: boolean,
  duration: number,
  toValue: number,
) => {
  const button = useCallback(() => {
    Animated.timing(buttonAnim, {
      useNativeDriver: useNativeDriver,
      toValue: toValue,
      duration: duration,
    }).start();
  }, [buttonAnim, duration, toValue, useNativeDriver]);

  return button;
};

export default useAnimateButton;
