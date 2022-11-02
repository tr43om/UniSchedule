import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useInstantSearch} from 'react-instantsearch-hooks';

type NoResultsProps = {};

const NoResults = ({}: NoResultsProps) => {
  const {results, indexUiState} = useInstantSearch();

  return (
    <>
      {!results.nbHits && (
        <View style={styles.container}>
          <Text>Группа "{indexUiState.query}" не существует</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    alignItems: 'center',
  },
});

export default NoResults;
