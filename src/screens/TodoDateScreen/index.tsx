import React, {FC, useLayoutEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {RouteModalsProp} from '../HomeScreen';
import ModalButtons from '../../components/ModalButtons';
import {useNavigation} from '@react-navigation/native';
import {formatToTimestamp} from '../../formatters/dateFormatters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    fontSize: 18,
    marginBottom: 20,
  },
  timePicker: {
    flex: 1,
  },
  buttonNext: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 60,
    right: 40,
    width: 70,
    height: 40,
    paddingTop: 9,
    paddingRight: 16,
    paddingBottom: 9,
    paddingLeft: 16,
    borderRadius: 100,
    borderColor: '#268CC7',
    borderWidth: 1,
  },
  buttonCreateTodo: {
    borderColor: 'green',
  },
  buttonNextDisabled: {
    borderColor: 'gray',
  },
});

const TodoDateScreen: FC<RouteModalsProp> = ({route}) => {
  const {name, description} = route.params;
  const [date, setDate] = useState<Date>(new Date(Date.now()));
  const navigation = useNavigation<any>();

  const navigateToHome = () => {
    navigation.navigate({
      name: 'HomeScreen',
      params: {post: todo},
      merge: true,
    });
  };

  const todo = {
    title: name,
    description,
    status: false,
    date: formatToTimestamp(date),
    id: Date.now().toString(),
  };

  const onChange = (event: DateTimePickerEvent, selectedDate: Date | any) => {
    setDate(selectedDate);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#beb9b9',
      },
      headerLeft: () => (
        <Button onPress={() => navigation.pop()} title="Назад" />
      ),
      title: 'Добавить дату',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Выберите дату окончания задачи:</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          onChange={onChange}
          style={styles.timePicker}
        />
      </View>
      <View style={[styles.buttonNext, styles.buttonCreateTodo]}>
        <ModalButtons navigateHandler={navigateToHome} color="green" />
      </View>
    </View>
  );
};

export default TodoDateScreen;
