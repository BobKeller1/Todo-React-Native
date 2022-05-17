import {Text, View} from 'react-native';
import React from 'react';

const FlatListEmptyElement = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Text>Извините, ничего не найдено!</Text>
    </View>
  );
};

export default FlatListEmptyElement;
