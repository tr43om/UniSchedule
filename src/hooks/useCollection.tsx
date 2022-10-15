import {useEffect, useState} from 'react';

import firestore from '@react-native-firebase/firestore';

import {DocumentData} from '../types';

export const useCollection = (coll: string) => {
  const [documents, setDocuments] = useState<DocumentData[]>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isPending, setIsPending] = useState<boolean>(false);

  useEffect(() => {
    const ref = firestore().collection(coll);

    setIsPending(true);
    const unsub = ref.onSnapshot(
      snapshot => {
        if (snapshot.empty) {
          setIsPending(false);
          setDocuments([]);
          setErrorMessage('There is no comments, add the new one');
        } else {
          setIsPending(false);
          let results: object[] = [];
          snapshot.docs.forEach(doc => {
            results.push({...doc.data(), id: doc.id});
          });

          // update state
          setDocuments(results);

          setErrorMessage('');
          setIsPending(false);
        }
      },
      error => {
        setIsPending(false);

        setErrorMessage(error.message);
      },
    );

    // unsubscribe on unmout
    return () => unsub();
  }, [coll]);

  return {documents, errorMessage, isPending};
};
