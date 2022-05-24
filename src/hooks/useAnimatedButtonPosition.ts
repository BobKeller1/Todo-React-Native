import {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import useKeyboardHeight from './useKeyboardHeight';

const useAnimatedButtonPosition = (
  useNativeDriver: boolean,
  duration: number,
  initialHeight: number,
  indent: number,
) => {
  const keyBoardHeight = useKeyboardHeight();
  const heightWithKeyboard = Number(keyBoardHeight) + indent;
  const buttonAnim = useRef(new Animated.Value(0)).current;

  const position = useCallback(
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
      position(heightWithKeyboard);
    } else {
      position(initialHeight);
    }
  }, [heightWithKeyboard, indent, initialHeight, keyBoardHeight, position]);

  return buttonAnim;
};

export default useAnimatedButtonPosition;
