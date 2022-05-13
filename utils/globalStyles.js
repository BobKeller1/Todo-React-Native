import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'ProximaNova-Black',
  },
});

const globalStyles = () => {
  const oldTextRender = Text.render;
  Text.render = function (...args) {
    const origin = oldTextRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    });
  };
};

export default globalStyles;
