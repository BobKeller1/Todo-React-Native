import React, {FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {RouteModalsProp} from '../../HomeScreen';
import ModalButtons from '../../../components/ModalButtons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
    position: 'relative',
  },
  input: {
    height: 50,
    padding: 7,
    paddingLeft: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(250, 250, 250, 0.93);',
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
});

const ModalScreenDate: FC<RouteModalsProp> = ({route}) => {
  const {name, description} = route.params;
  const [date, setDate] = useState<Date>(new Date(Date.now()));

  const todo = {
    title: name,
    description,
    status: false,
    date: date.valueOf().toString(),
    id: Date.now().toString(),
  };

  const onChange = (event: DateTimePickerEvent, selectedDate: Date) => {
    setDate(selectedDate);
  };

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
      <ModalButtons buttonName={'CreateTodo'} todo={todo} />
    </View>
  );
};

export default ModalScreenDate;
