import {View, Text} from 'react-native';
import React from 'react';

type ScheduleCardProps = {
  groupName: string;
};

// const GroupsQuestions = Object.freeze({
//   ЯПБ: <YapbQuestion />,
//   ЯФМ: <YafmQuestion />,
// });

const ScheduleCard = ({groupName}: ScheduleCardProps) => {
  const abbreviation = groupName && groupName.split('-')[0];

  return (
    <View>
      <Text>ScheduleCard</Text>
      {/* <View>
        {GroupsQuestions[abbreviation as keyof typeof GroupsQuestions]}
      </View> */}
    </View>
  );
};

export default ScheduleCard;
