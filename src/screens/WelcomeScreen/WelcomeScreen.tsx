import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Searching20Icon} from '../../assets';
import {Button, Text, TextInput} from 'react-native-paper';
import {WelcomeScreenProps} from '../../types';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch} from '../../../store';
import {setUsername} from '../../../store';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import * as yup from 'yup';
import {FormInput} from '../../../components';
import {useEffect} from 'react';
import {index} from '../../services/algolia-search/index.js';
import {ALGOLIA_API_KEY, ALGOLIA_APP_ID} from '../../constants';
import Config from 'react-native-config';
import {useCollection} from '../../hooks';
import firestore from '@react-native-firebase/firestore';

type DocumentType = {
  id: string;
  name: string;
  course: number;
  faculty: string;
  degree: string;
  formOfEducation: string;
};

const WelcomeScreen = ({navigation}: WelcomeScreenProps) => {
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
    index.saveObjects(records).then(() => console.log('ALGOLIA INDEX UPDATED'));
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
        username: yup.string().min(3),
      }),
    ),
    mode: 'onChange',
  });

  const handleOnPress = handleSubmit(({username}) => {
    dispatch(setUsername(username));
    navigation.navigate('Signup', {
      screen: 'FirstStep',
    });
    reset();
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
      />
      <Button
        mode="contained"
        textColor="#fff"
        style={styles.button}
        onPress={handleOnPress}
        disabled={!isValid}>
        Продолжить
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    justifyContent: 'center',
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
