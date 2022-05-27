import React, {useLayoutEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  useLayoutEffect(() => {
    navigation.setOptions({title: 'Настройки'});
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Button
        title={'Open modal'}
        onPress={() =>
          navigation.navigate('ModalNavigator', {screen: 'TodoModalName'})
        }
      />
      <Text>Настройки</Text>
    </View>
  );
};

export default SettingsScreen;
