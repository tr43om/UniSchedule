import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button, Card, Text, Title, Paragraph} from 'react-native-paper';
import {SignUpStepScreenProps, GroupType} from '../../../../types';
import {useDocument} from '../../../../hooks';
import {useSelector} from 'react-redux';
import {
  selectGroupId,
  selectSecondLanguage,
  setSecondLanguage,
  useAppDispatch,
} from '../../../../store';
import {useTheme} from 'react-native-paper';
import {
  ExpandLessIcon,
  ExpandMoreIcon,
  GroupIcon,
  UnihatIcon,
} from '../../../../assets';
import {useState} from 'react';
import {
  NavigationNextButton,
  SignUpOptionalQuestion,
  YapbQuestion,
  NavigationFinalButton,
} from '../../../../components';

const OptionalQuestionScreen = ({navigation}: SignUpStepScreenProps) => {
  const groupId = useSelector(selectGroupId);
  const secondLanguage = useSelector(selectSecondLanguage);
  const [showExtraInfo, setShowExtraInfo] = useState(false);
  console.log(groupId);
  const {document: group} = useDocument<GroupType>('groups', groupId);
  const {colors} = useTheme();
  const dispatch = useAppDispatch();

  const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },

    groupContainer: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#fff',
    },

    groupTitle: {
      marginBottom: -5,
    },

    groupExtraInfo: {
      color: colors.tertiary,
    },
  });

  return (
    <View style={styles.rootContainer}>
      <Card style={styles.groupContainer} mode="elevated">
        <TouchableOpacity onPress={() => setShowExtraInfo(show => !show)}>
          <Card.Title
            title={`Группа ${group.name}`}
            titleStyle={styles.groupTitle}
            subtitle={`${group.course} курс`}
            titleVariant="titleMedium"
            subtitleStyle={styles.groupExtraInfo}
            right={() => (
              <>
                {showExtraInfo ? (
                  <ExpandLessIcon
                    width={25}
                    height={25}
                    fill={colors.tertiary}
                  />
                ) : (
                  <ExpandMoreIcon
                    width={25}
                    height={25}
                    fill={colors.tertiary}
                  />
                )}
              </>
            )}
            left={({size}) => (
              <GroupIcon fill={colors.primary} width={size} height={size} />
            )}
          />
        </TouchableOpacity>

        {/* <Text variant="titleMedium" style={styles.groupTitle}></Text> */}
        {/* <Text variant="bodySmall" style={styles.groupExtraInfo}>
        {group.course} курс
      </Text> */}
        {showExtraInfo && (
          <Card.Content>
            <Text style={styles.groupExtraInfo}>{group.faculty}</Text>
          </Card.Content>
        )}

        <Card.Actions>
          <Button
            onPress={() => {
              dispatch(setSecondLanguage(''));
              navigation.goBack();
            }}
            mode="text">
            Выбрать другую
          </Button>
        </Card.Actions>
      </Card>
      <SignUpOptionalQuestion groupName={group.name} />
      <NavigationFinalButton isDisabled={Boolean(!secondLanguage)} />
    </View>
  );
};

export default OptionalQuestionScreen;
