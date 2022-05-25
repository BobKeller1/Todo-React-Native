import React, {Dispatch, FC, useLayoutEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import OutlineButton, {Colors} from '../../components/OutlineButton';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {formatToTimestamp} from '../../formatters/dateFormatters';
import {connect} from 'react-redux';
import {addTodo} from '../../store/actions';

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

export interface ITaskItem {
  title: string;
  description: string;
  status: boolean;
  date: string;
}

interface ITodoDateScreenProp {
  route: RouteProp<{params: {name: string; description: string}}, 'params'>;
  addTask: (todo: ITaskItem) => void;
}

const TodoDateScreen: FC<ITodoDateScreenProp> = ({route, addTask}) => {
  const {name, description} = route.params;
  const [date, setDate] = useState<Date>(new Date(Date.now()));
  const navigation = useNavigation<any>();

  const todo = {
    title: name,
    description,
    status: false,
    date: formatToTimestamp(date),
  };

  const onChange = (event: DateTimePickerEvent, selectedDate: Date | any) => {
    setDate(selectedDate);
  };

  const onPress = () => {
    addTask(todo);
    navigation.navigate({
      name: 'HomeScreen',
      params: {post: todo},
      merge: true,
    });
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
        <OutlineButton onPress={onPress} color={Colors.Green} />
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    addTask: (todo: ITaskItem) => {
      dispatch(addTodo(todo));
    },
  };
};

export default connect(null, mapDispatchToProps)(TodoDateScreen);
