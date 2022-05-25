import React, {FC, useLayoutEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {RouteModalsProp} from '../HomeScreen';
import OutlineButton from '../../components/OutlineButton';
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
  buttonContainer: {
    position: 'absolute',
    right: 120,
    bottom: 100,
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
  };

  const onChange = (event: DateTimePickerEvent, selectedDate: Date | any) => {
    setDate(selectedDate);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#beb9b9',
      },
      headerLeft: () => <Button onPress={navigation.goBack} title="Назад" />,
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
      <View style={[styles.buttonContainer]}>
        <OutlineButton onPress={navigateToHome} color="green" />
      </View>
    </View>
  );
};

export default TodoDateScreen;
