import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Searching20Icon} from '../../../../assets';
import {Button, Text, TextInput} from 'react-native-paper';
import {SignUpStepScreenProps} from '../../../../types';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch} from '../../../../store';
import {setUsername} from '../../../../store';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import * as yup from 'yup';
import {FormInput, NavigationNextButton} from '../../../../components';
import {useEffect} from 'react';
import {algoliaIndex} from '../../../../services/algolia-search';
import {ALGOLIA_API_KEY, ALGOLIA_APP_ID} from '../../../../constants';
import Config from 'react-native-config';
import {useCollection} from '../../../../hooks';
import firestore from '@react-native-firebase/firestore';
import {withNavigation} from '../../../../hocs';

type DocumentType = {
  id: string;
  name: string;
  course: number;
  faculty: string;
  degree: string;
  formOfEducation: string;
};

const WelcomeScreen = ({navigation}: SignUpStepScreenProps) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const {documents} = useCollection<DocumentType>('groups');

  useEffect(() => {
    const records = documents.map(doc => {
      return {
        objectID: doc.id,
        name: doc.name,
        course: doc.course,
        faculty: doc.faculty,
        degree: doc.degree,
        formOfEducation: doc.formOfEducation,
      };
    });
    algoliaIndex.saveObjects(records);

    // const subscriber = firestore()
    //   .collection('groups')
    //   .onSnapshot(snapshot => {
    //     snapshot.forEach(doc =>
    //       firestore().collection('groups').doc(doc.id).update({id: doc.id}),
    //     );
    //   });

    // collection manipulation (DEV ONLY)
    // if (documents) {
    //   documents.forEach(doc => {
    //     // update value
    //     firestore()
    //       .collection('groups')
    //       .doc(doc.id)
    //       .update({
    //         degree: 'бакалавриат',
    //         formOfEducation: 'очная',
    //       })
    //       .then(() => console.log('updated'));
    //     // Delete value
    //     // firestore()
    //     //   .collection('groups')
    //     //   .doc(doc.id)
    //     //   .update({isBachelorsDegree: firestore.FieldValue.delete()});
    //   });
    // }
  }, [documents]);

  const {
    handleSubmit,
    control,
    reset,
    formState: {isValid},
  } = useForm<{username: string}>({
    defaultValues: {
      username: '',
    },

    resolver: yupResolver(
      yup.object().shape({
        username: yup.string().min(3, 'Имя должно быть не менее 3 символов'),
      }),
    ),
    mode: 'onChange',
  });

  const handleOnPress = handleSubmit(({username}) => {
    console.log(username);
    dispatch(setUsername(username));
  });

  return (
    <View style={styles.container}>
      <Searching20Icon style={styles.illustration} />
      <Text variant="headlineMedium" style={styles.title}>
        Расписание ОмГУ
      </Text>
      <Text variant="bodySmall" style={styles.subtitle}>
        Больше никаких поисковых операций, чтобы узнать следующую пару. Теперь
        все собрано в одном месте
      </Text>
      <FormInput
        label="Как вас зовут?"
        mode="outlined"
        style={styles.input}
        name="username"
        control={control}
        placeholder="Введите ваше имя..."
      />

      <NavigationNextButton
        navigation={navigation}
        isDisabled={!isValid}
        buttonStyle={styles.buttonStyle}
        handleOnPress={handleOnPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
  },

  buttonStyle: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },

  illustration: {
    alignSelf: 'center',
  },

  title: {
    justifyContent: 'center',
    marginTop: -40,
  },

  subtitle: {
    marginTop: 5,
  },

  input: {
    marginTop: 10,
  },

  button: {
    marginTop: 20,
  },

  redirectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default WelcomeScreen;
