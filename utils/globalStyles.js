import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'ProximaNova-Black',
  },
  defaultOpacity: {
    opacity: 0.75,
  },
});

const globalStylesText = () => {
  const oldTextRender = Text.render;
  Text.render = function (...args) {
    const origin = oldTextRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    });
  };
};

const globalStylesTouchableOpacity = () => {
  const oldTouchableOpacityRender = TouchableOpacity.render;
  TouchableOpacity.render = function (...args) {
    const origin = oldTouchableOpacityRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultOpacity, origin.props.style],
    });
  };
};

export {globalStylesText, globalStylesTouchableOpacity};
