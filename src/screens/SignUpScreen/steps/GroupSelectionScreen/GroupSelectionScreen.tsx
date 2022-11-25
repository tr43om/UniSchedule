import React, {useRef} from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {Surface} from 'react-native-paper';
import {InstantSearch} from 'react-instantsearch-hooks';

import {InfiniteHits, SearchBox, Filters} from '../../../../components';
import {SignUpStepScreenProps} from '../../../../types';
import {FilteraltIcon, SearchEngineIcon} from '../../../../assets';
import {searchClient} from '../../../../services/algolia-search';
import {useAppDispatch, setGroupId, selectUsername} from '../../../../store';

const GroupSelectionScreen = ({navigation}: SignUpStepScreenProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const listRef = useRef<FlatList>(null);
  const username = useSelector(selectUsername);
  const dispatch = useAppDispatch();
  const scrollToTop = () => {
    listRef.current?.scrollToOffset({animated: true, offset: 0});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Привет, {username} !</Text>
        </View>

        <TouchableOpacity
          style={styles.filterIcon}
          children={
            <FilteraltIcon width={20} height={20} fill="#fff" />
            // {totalRefinements > 0 && <Badge>{totalRefinements}</Badge>}
          }
          onPress={() => setIsModalOpen(iOpen => !iOpen)}
        />
      </View>

      <InstantSearch indexName="groups" searchClient={searchClient}>
        <Surface style={styles.surface}>
          <SearchBox onChange={scrollToTop} />
          <InfiniteHits
            ref={listRef}
            handleOnHitPress={id => {
              dispatch(setGroupId(id));
              navigation.jumpTo('ThirdStep');
            }}
          />
        </Surface>

        <Filters
          attribute="course"
          onChange={scrollToTop}
          isModalOpen={isModalOpen}
          toggleModal={() => setIsModalOpen(iOpen => !iOpen)}
        />
      </InstantSearch>
      <View style={styles.illustrationContainer}>
        <SearchEngineIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, position: 'relative'},
  title: {fontSize: 20, marginBottom: 20},
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  surface: {
    borderRadius: 5,
  },

  illustrationContainer: {
    position: 'absolute',
    top: 200,
    alignSelf: 'center',
    zIndex: -1,
  },

  filterIcon: {
    borderRadius: 10,
    backgroundColor: '#c1175b',
    padding: 10,
    marginTop: -5,
  },
});

export default GroupSelectionScreen;
