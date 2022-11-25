import {View} from 'react-native';
import React from 'react';
import {YafmQuestion, YapbQuestion} from './questions';

type SignUpOptionalQuestionProps = {
  groupName: string;
};

const GroupsQuestions = Object.freeze({
  ЯПБ: <YapbQuestion />,
  ЯФМ: <YafmQuestion />,
});

const SignUpOptionalQuestion = ({groupName}: SignUpOptionalQuestionProps) => {
  const abbreviation = groupName && groupName.split('-')[0];

  return (
    <View>{GroupsQuestions[abbreviation as keyof typeof GroupsQuestions]}</View>
  );
};

export default SignUpOptionalQuestion;
