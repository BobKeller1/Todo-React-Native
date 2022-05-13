import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  todoItem: {
    maxWidth: 370,
    height: 84,
    padding: 10,
  },
  container: {
    padding: 13,
    flexDirection: "row"
  },
  mainContainer: {
    flex: 0.7,
  },
  sideContainer: {
    flex: 0.3,
  },
  title: {
    fontFamily: 'Proxima Nova',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  description: {
    fontFamily: 'Proxima Nova',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'left',
    textAlignVertical: 'center',
    color: 'rgba(0,0,0,0.54)',
  },
});

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.todoItem}>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <Text style={styles.title}>Заголовок</Text>
            <Text style={styles.description}>Описание</Text>
          </View>
          <View style={styles.sideContainer}>
            <Text style={styles.title}>Не выполнена</Text>
            <Text style={styles.description}>дата</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
