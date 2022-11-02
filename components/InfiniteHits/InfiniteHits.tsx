import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useInfiniteHits, UseInfiniteHitsProps} from 'react-instantsearch-hooks';
import {forwardRef} from 'react';
import {Highlight} from '../Highlight';
import {useInstantSearch} from 'react-instantsearch-hooks';
import {SearchIcon} from '../../src/assets';
import {NoResults} from '../NoResults';

type Ref = FlatList;

const InfiniteHits = forwardRef<
  Ref,
  UseInfiniteHitsProps<{
    objectID: string;
    name: string;
  }>
>((props, ref) => {
  const {hits, isLastPage, showMore} = useInfiniteHits(props);
  const {indexUiState, results, status} = useInstantSearch();
  const showResults = indexUiState.query && status === 'idle';

  return (
    <>
      <NoResults />

      {showResults && ( // Only show results if user start typing
        <FlatList
          ref={ref}
          data={hits}
          keyExtractor={item => item.objectID}
          onEndReached={() => {
            if (!isLastPage) {
              showMore();
            }
          }}
          renderItem={({item}) => (
            <View style={styles.item}>
              <SearchIcon width={15} height={15} style={styles.icon} />
              <Text>
                <Highlight hit={item} attribute="name" separator="" />
              </Text>
            </View>
          )}
        />
      )}
    </>
  );
});

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  icon: {
    paddingRight: 40,
    opacity: 0.8,
  },
});

export default InfiniteHits;
