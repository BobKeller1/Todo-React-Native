import React, {useEffect} from 'react';
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
  useEffect(() => {
    navigation.setOptions({title: 'Настройки'});
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Button
        title={'Open modal'}
        onPress={() => navigation.navigate('Modal')}
      />
      <Text>Настройки</Text>
    </View>
  );
};

export default SettingsScreen;
