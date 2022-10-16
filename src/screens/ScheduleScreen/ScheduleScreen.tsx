import React from 'react';
import {View, Text} from 'react-native';
import {Container} from '../../../components';
import {Typography} from '../../../components';
import {useCollection} from '../../hooks';
import {
  getDay,
  daysToWeeks,
  differenceInWeeks,
  differenceInDays,
  isSaturday,
  isMonday,
} from 'date-fns';
import {ScheduleType} from '../../types';

const ScheduleScreen = () => {
  const {documents: schedule} = useCollection<ScheduleType>('ЯПБ-901-о-11');

  // console.log(differenceInWeeks(new Date(), new Date(2022, 8)));
  // console.log(isSaturday(new Date()));
  return (
    <Container>
      <Typography>ScheduleScreen</Typography>
      {schedule &&
        schedule!.map(item => (
          <View key={item.id}>
            <Typography>{item.name}</Typography>
          </View>
        ))}
    </Container>
  );
};

export default ScheduleScreen;
