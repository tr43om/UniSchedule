import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {RadioButton, List, Surface, Card} from 'react-native-paper';
import {useState} from 'react';
import {
  ChinaFlagIcon,
  FranceFlagIcon,
  GermanyFlagIcon,
  SpainFlagIcon,
} from '../../../assets';
import {useTheme} from 'react-native-paper';
import {useAppDispatch, setSecondLanguage} from '../../../store';
import {useSelector} from 'react-redux';
import {selectSecondLanguage} from '../../../store/ducks/user/selectors';
const YapbQuestion = () => {
  const dispatch = useAppDispatch();
  const secondLanguage = useSelector(selectSecondLanguage);
  const {colors} = useTheme();
  const languagesData = [
    {language: 'Французский', icon: <FranceFlagIcon width={35} height={35} />},
    {language: 'Немецкий', icon: <GermanyFlagIcon width={35} height={35} />},
    {language: 'Китайский', icon: <ChinaFlagIcon width={35} height={35} />},
    {language: 'Испанский', icon: <SpainFlagIcon width={35} height={35} />},
  ];
  return (
    <View>
      <List.Section title="Какой второй язык вы изучаете?">
        <RadioButton.Group
          onValueChange={value => {
            dispatch(setSecondLanguage(value));
          }}
          value={secondLanguage}>
          <FlatList
            ItemSeparatorComponent={() => <View style={{marginVertical: 5}} />}
            data={languagesData}
            keyExtractor={({language}) => language}
            renderItem={({item}) => (
              <TouchableOpacity>
                <Surface
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 15,
                    borderWidth: 3,
                    borderRadius: 5,
                    borderColor:
                      secondLanguage === item.language
                        ? colors.primary
                        : '#fff',
                  }}>
                  {item.icon && item.icon}

                  <RadioButton.Item
                    value={item.language}
                    label={item.language}
                    uncheckedColor="transparent"
                    color="transparent"
                  />
                </Surface>
              </TouchableOpacity>
            )}
          />
        </RadioButton.Group>
      </List.Section>
    </View>
  );
};

export default YapbQuestion;
