import React, {useEffect, useMemo, useState} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {StyleSheet, TextInput, View} from 'react-native';
import TodoList from '../../TodoList';
import SectionedTodoList from '../../SectionedTodoList';
import {ITodoItem} from '../../../App';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    maxWidth: 350,
    height: 36,
    padding: 7,
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(250, 250, 250, 0.93);',
  },
});

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onPress = () => console.log('pressed');
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: 'Главный экран'});
  }, [navigation]);

  const data: ITodoItem[] = useMemo(
    () => [
      {
        title: 'todo title 0',
        description: 'description 0',
        status: false,
        date: '1652207435533',
        id: '10',
      },
      {
        title: 'todo title 0',
        description: 'description 0',
        status: false,
        date: '1652207435533',
        id: '11',
      },
      {
        title: 'todo title 0',
        description: 'description 0',
        status: false,
        date: '1652207435533',
        id: '111',
      },
      {
        title: 'todo title 0',
        description: 'description 0',
        status: false,
        date: '1652207435533',
        id: '123',
      },
      {
        title: 'todo title PPP 1',
        description: 'description 1',
        status: true,
        date: '1652201435533',
        id: '1',
      },
      {
        title: 'todo titlsse RRRR 2',
        description: 'description 2',
        status: false,
        date: '1652201435533',
        id: '2',
      },
      {
        title: 'todo title DBS 3',
        description: 'description 3',
        status: false,
        date: '1652307475737',
        id: '3',
      },
      {
        title: 'todo title ABC 4',
        description: 'description 4',
        status: true,
        date: '1752701435134',
        id: '4',
      },
    ],
    [],
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.inputContainer}>
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
          placeholder={'Search'}
        />
      </View>
      {searchQuery ? (
        <TodoList data={data} searchQuery={searchQuery} onPress={onPress} />
      ) : (
        <SectionedTodoList data={data} onPress={onPress} />
      )}
    </SafeAreaView>
  );
};
export default HomeScreen;
