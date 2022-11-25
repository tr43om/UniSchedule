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
import type {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

const ScheduleScreen = () => {
  const {documents: schedule} = useCollection<YapbScheduleType>('ЯПБ-901-о-11');
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
    .toLocaleDateString('en-US', {weekday: 'long'})
    .split(',')[0]
    .toLowerCase();

  const currentWeek = Math.floor(
    differenceInWeeks(new Date(), new Date(2022, 7, 29)),
  );

  console.log(currentWeek);
  // console.log(new Date().toLocaleDateString());
  // console.log(getDay(new Date()).toLocaleString());

  // console.log(isMonday());

  // firestore()
  //   .collection('groups')
  //   .get()
  //   .then(snap => {
  //     weeks.forEach(week =>
  //       snap.docs[0].ref
  //         .collection('schedule')
  //         .doc(`${week}`)
  //         .set({})
  //         .then(doc => console.log(doc)),
  //     );
  //   })
  //   .then(() => console.log('done'));
  // console.log('oo');

  useEffect(() => {
    const addWeeksToSchedule = () => {
      const weeks = [11, 12, 13, 14, 15, 16, 17];
      const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

      // firestore()
      //   .collection('schedule')
      //   .doc('uuid')
      //   .get()
      //   .then(doc => {
      //     doc.ref.set({
      //       groupID: 'groupID',
      //       name: 'groupName',
      //     });

      //     weeks.forEach(week =>
      //       weekdays.forEach(weekday =>
      //         doc.ref.collection(`week_${week}`).doc().set({weekday}),
      //       ),
      //     );
      //   });

      firestore()
        .collection('schedule')
        .get()
        .then(scheduleItem =>
          scheduleItem.docs.forEach(doc =>
            weeks.forEach(week =>
              weekdays.forEach(weekday =>
                doc.ref
                  .collection(`week_${week}`)
                  .doc()
                  .set({weekday}, {merge: true}),
              ),
            ),
          ),
        )
        .then(() => console.log('done'));

      // console.log(scheduleColl);
    };

    // firestore()
    //   .collection('schedule')
    //   .doc('uuid')
    //   .collection('week_12')
    //   .where('weekday', '==', 'friday')
    //   .get()
    //   .then(doc => console.log(doc.docs[0].data()));

    // scheduleColl?.forEach(doc => )

    // snap.docs.forEach(doc =>
    //   weekdays.forEach(week => doc.ref.collection(`week_${week}`)),
    // );
    // addWeeksToSchedule();
  }, []);

  // then(snap => snap.docs.forEach(doc => doc.ref.collection('schedule')));

  return (
    <View>
      <Text>Привет, {username}</Text>
      <FlatList
        ItemSeparatorComponent={() => <View style={{marginVertical: 5}} />}
        data={filteredSchedule}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <>
            <TouchableOpacity>
              <Card>
                {/* <Text>{item.name}</Text> */}
                <Text>{item.name}</Text>
              </Card>
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
};

export default ScheduleScreen;
