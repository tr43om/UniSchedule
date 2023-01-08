import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Container} from '../../components';
import {Typography} from '../../components';
import {useCollection} from '../../hooks';
import {
  getDay,
  daysToWeeks,
  differenceInWeeks,
  differenceInDays,
  differenceInHours,
  isSaturday,
  isMonday,
} from 'date-fns';
import {ScheduleType, YapbScheduleType} from '../../types';
import {Card, Surface, Text} from 'react-native-paper';
import {selectUsername, selectSecondLanguage} from '../../store';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  useCollectionData,
  useCollection as useColl,
} from '@skillnation/react-native-firebase-hooks/firestore';
import type {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {CollectionReference} from '../../types/FirebaseFirestoreTypes/FirebaseFirestoreTypes';
import {DocumentData} from '../../types/FirebaseFirestoreTypes/FirebaseFirestoreTypes';

const ScheduleScreen = () => {
  const {documents: schedule} = useCollection<YapbScheduleType>('schedule');
  const [schs, setSch] = useState<DocumentData[]>();

  console.log(schs);

  useEffect(() => {
    const ref = firestore()
      .collection('schedule')
      .where('group', '==', 'ЯПБ-901-О-11')
      .get()
      .then(groupRef => groupRef.docs)
      .then(group => group[0].ref)
      .then(weekRef =>
        weekRef
          .collection('week_1')
          .where('weekday', '==', 'понедельник')
          .get(),
      )
      .then(weeks => {
        const result = weeks.docs.map(week => week.data());
        setSch(result);
      });

    // console.log(ref);
  }, []);

  // const [data, loading, error] = useColl(scheduleRef);
  // console.log(data?.docs[0].get());

  const username = useSelector(selectUsername);

  const selectedSecondLanguage = useSelector(selectSecondLanguage);
  const filteredSchedule = schedule.filter(
    sch => !sch.secondLanguage || sch.secondLanguage === 'Французский',
  );
  const [scheduleColl, setScheduleColl] =
    useState<
      FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[]
    >();

  const dayOfWeek = new Date()
    .toLocaleDateString('ru-Ru', {weekday: 'long'})
    .split(',')[0]
    .toLowerCase();

  console.log(dayOfWeek);

  const currentWeek = Math.floor(
    differenceInWeeks(new Date(), new Date(2022, 7, 29)),
  );

  console.log(currentWeek);

  return (
    <View>
      <Text>Привет, {username}</Text>
      <FlatList
        ItemSeparatorComponent={() => <View style={{marginVertical: 5}} />}
        data={schs}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <>
            <TouchableOpacity>
              <Card>
                {/* <Text>{item.name}</Text> */}
                <Text>{item.subject}</Text>
              </Card>
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
};

export default ScheduleScreen;
