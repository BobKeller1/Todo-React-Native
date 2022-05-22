import React, {FC, useState} from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {RouteModalsProp} from '../../HomeScreen';

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
  header: {
    flex: 1,
    fontSize: 18,
    marginBottom: 20,
  },
  buttonNext: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 60,
    right: 30,
    height: 40,
    paddingTop: 9,
    paddingRight: 16,
    paddingBottom: 9,
    paddingLeft: 16,
    borderRadius: 100,
    borderColor: 'green',
    borderWidth: 1,
  },
});

const ModalScreenDate: FC<RouteModalsProp> = ({route}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {name, description} = route.params;
  const [date, setDate] = useState<Date>(new Date(Date.now()));

  const todo = {
    title: name,
    description,
    status: false,
    date: date.valueOf(),
    id: Date.now().toString(),
  };

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    setDate(selectedDate);
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.header}>Выберите дату окончания задачи:</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          onChange={onChange}
          style={{flex: 1}}
        />
      </View>
      <View style={styles.buttonNext}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate({
              name: 'HomeScreen',
              params: {post: todo, id: 1},
              merge: true,
            })
          }>
          <Text style={{color: 'green'}}>Создать задачу</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalScreenDate;
