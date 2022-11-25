import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import React, {forwardRef} from 'react';
import {
  useInfiniteHits,
  UseInfiniteHitsProps,
  useSearchBox,
  useInstantSearch,
} from 'react-instantsearch-hooks';
import {ArrowNextIcon} from '../../assets';

import {Highlight} from '../Highlight';
import {NoResults} from '../NoResults';

interface InfiniteHitsProps
  extends UseInfiniteHitsProps<{
    objectID: string;
    name: string;
  }> {
  handleOnHitPress: (id: string) => void;
}

const InfiniteHits = forwardRef<FlatList, InfiniteHitsProps>((props, ref) => {
  const {hits, isLastPage, showMore} = useInfiniteHits(props);
  const {indexUiState, status} = useInstantSearch();
  const {clear: clearSearchBox} = useSearchBox();
  const showResults = indexUiState.query && status === 'idle';

  const {colors} = useTheme();

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
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                props.handleOnHitPress(item.objectID);
                clearSearchBox();
              }}>
              <View>
                <Text>
                  <Highlight hit={item} attribute="name" separator="" />
                </Text>
                <Text style={styles.hitExtraInfo}>{item.course} курс</Text>
              </View>

              <ArrowNextIcon
                width={25}
                height={25}
                style={styles.icon}
                fill={colors.primary}
              />
            </TouchableOpacity>
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
    justifyContent: 'space-between',
    paddingVertical: 25,
    paddingRight: 15,
    paddingLeft: 20,
  },
  hitExtraInfo: {
    fontSize: 12,
  },
  icon: {
    opacity: 0.8,
  },
});

export default InfiniteHits;
