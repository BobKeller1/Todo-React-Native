import {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import useKeyboardHeight from './useKeyboardHeight';

const useAnimateKeyboardHeight = (
  useNativeDriver: boolean,
  duration: number,
  initialHeight: number,
  indent: number,
) => {
  const keyBoardHeight = useKeyboardHeight();
  const heightWithKeyboard = keyBoardHeight + indent;
  const buttonAnim = useRef(new Animated.Value(heightWithKeyboard)).current;

  const animatePosition = useCallback(
    height => {
      Animated.timing(buttonAnim, {
        useNativeDriver: useNativeDriver,
        toValue: height,
        duration: duration,
      }).start();
    },
    [buttonAnim, duration, useNativeDriver],
  );

  useEffect(() => {
    if (Number(keyBoardHeight) !== 0) {
      animatePosition(heightWithKeyboard);
    } else {
      animatePosition(initialHeight);
    }
  }, [
    heightWithKeyboard,
    indent,
    initialHeight,
    keyBoardHeight,
    animatePosition,
  ]);

  return buttonAnim;
};

export default useAnimateKeyboardHeight;
