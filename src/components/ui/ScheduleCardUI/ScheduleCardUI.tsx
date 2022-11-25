import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Card, Text} from 'react-native-paper';
import {ScheduleType} from '../../../types';

type ScheduleCardUIProps = {
  schedule: ScheduleType;
  extraInfo: string;
};

const ScheduleCardUI = ({schedule, extraInfo}: ScheduleCardUIProps) => {
  return (
    <TouchableOpacity>
      <Card>
        <Text>{schedule.name}</Text>
        {extraInfo && <Text>{extraInfo}</Text>}
      </Card>
    </TouchableOpacity>
  );
};

export default ScheduleCardUI;
