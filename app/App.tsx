import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ListRenderItem,
  TextInput,
  StyleSheet,
  View,
  SectionList,
  Text,
} from 'react-native';
import TodoItem from './components/TodoItem';
import FlatListItemSeparator from './components/FlatListItemSeparator';
import FlatListEmptyElement from './components/FlatListEmptyElement';
import Header from './components/Header';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  searchInput: {
    width: '100%',
    maxWidth: 350,
    height: 36,
    padding: 7,
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(250, 250, 250, 0.93);',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 15,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});

interface ITodoItem {
  title: string;
  description: string;
  date: string;
  id: string;
  status: boolean;
}

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onPress = () => console.log('pressed');

  const data: ITodoItem[] = [
    {
      title: 'todo title 0',
      description: 'description 0',
      status: false,
      date: '1652207435533',
      id: '0',
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
  ];

  const groupedByDate = data.reduce(
    (acc: Record<string, ITodoItem[]>, item) => {
      const date = new Date(+item.date).toLocaleString('ru-RU').split(',')[0];
      if (acc[date]) {
        acc[date].push(item);
      } else {
        acc[date] = [item];
      }
      return acc;
    },
    {},
  );

  const transformedData = Object.keys(groupedByDate).map(key => {
    return {
      title: key,
      data: groupedByDate[key],
    };
  });

  const todosArray = data.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderItem: ListRenderItem<ITodoItem> = ({item}) => {
    return (
      <TodoItem
        title={item.title}
        description={item.description}
        status={item.status}
        date={item.date}
        onPress={onPress}
      />
    );
  };

  return (
    <>
      <Header />
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
            placeholder={'Search'}
          />
        </View>
        {searchQuery ? (
          <FlatList
            data={todosArray}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={FlatListItemSeparator}
            ListFooterComponent={
              todosArray.length !== 0 ? FlatListItemSeparator : null
            }
            ListHeaderComponent={
              todosArray.length !== 0 ? FlatListItemSeparator : null
            }
            ListEmptyComponent={FlatListEmptyElement}
          />
        ) : (
          <SectionList
            sections={transformedData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default App;
