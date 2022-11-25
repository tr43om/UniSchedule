import {useEffect, useState} from 'react';

import firestore from '@react-native-firebase/firestore';

export const useDocument = <DOC extends {id: string}>(
  coll: string,
  id: string,
): {document: DOC; errorMessage: string; isPending: boolean} => {
  const [document, setDocument] = useState<DOC>({} as DOC);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isPending, setIsPending] = useState<boolean>(false);

  useEffect(() => {
    const ref = firestore().collection(coll).doc(id);

    setIsPending(true);
    const unsub = ref.onSnapshot(
      snapshot => {
        if (snapshot.data()) {
          setIsPending(false);
          setDocument({...snapshot.data(), id: snapshot.id});
          setErrorMessage('');
        } else {
          setErrorMessage('No such document');
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
  }, [coll, id]);

  return {document, errorMessage, isPending};
};
