import {View, Text} from 'react-native';
import React from 'react';
import {YapbScheduleType} from '../../../types';
import {ScheduleCardUI} from '../../ui';

type YapbCardProps = {
  schedule: YapbScheduleType;
  secondLanguage: string;
};

const YapbCard = ({schedule, secondLanguage}: YapbCardProps) => {
  return (
    <View>
      {/* {!schedule.secondLanguage && <ScheduleCardUI schedule={schedule} />}

      {schedule.secondLanguage === secondLanguage && (
        <ScheduleCardUI schedule={schedule} extraInfo={}/>
      )} */}
    </View>
  );
};

export default YapbCard;
