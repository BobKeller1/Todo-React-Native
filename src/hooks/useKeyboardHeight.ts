import {useCallback, useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

const useKeyboardHeight = (
  didShow?: (keyboardHeight?: number) => void,
  didHide?: (x: number) => void,
): number => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const onKeyboardDidShow = useCallback(
    e => {
      setKeyboardHeight(e.endCoordinates.height);
      if (didShow) {
        didShow(e.endCoordinates.height);
      }
    },
    [didShow],
  );

  const onKeyboardDidHide = useCallback(() => {
    setKeyboardHeight(0);
    if (didHide) {
      didHide(0);
    }
  }, [didHide]);

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      'keyboardWillShow',
      onKeyboardDidShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardWillHide',
      onKeyboardDidHide,
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [onKeyboardDidHide, onKeyboardDidShow]);

  return keyboardHeight;
};

export default useKeyboardHeight;
