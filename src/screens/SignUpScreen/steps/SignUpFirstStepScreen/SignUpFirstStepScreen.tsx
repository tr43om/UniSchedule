import React, {useRef} from 'react';
import {
  InfiniteHits,
  SearchBox,
  NoResults,
  Filters,
} from '../../../../../components';
import {useTheme} from '@react-navigation/native';

import {SignUpStepScreenProps} from '../../../../types';
import {
  FilteraltIcon,
  SearchEngineIcon,
  SearchIllustrationIcon,
  TuneIcon,
} from '../../../../assets';
import {InstantSearch} from 'react-instantsearch-hooks';
import {searchClient} from '../../../../services/algolia-search';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Button, IconButton, Surface} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectUsername} from '../../../../../store';

const SignUpFirstStepScreen = ({navigation, route}: SignUpStepScreenProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const listRef = useRef<FlatList>(null);
  const username = useSelector(selectUsername);

  const scrollToTop = () => {
    listRef.current?.scrollToOffset({animated: true, offset: 0});
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
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
          <InfiniteHits ref={listRef} />
        </Surface>

        <Filters
          attribute="course"
          onChange={scrollToTop}
          isModalOpen={isModalOpen}
          toggleModal={() => setIsModalOpen(iOpen => !iOpen)}
        />

        <View style={styles.illustrationContainer}>
          <SearchEngineIcon />
        </View>
      </InstantSearch>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: 20, marginBottom: 20},
  surface: {
    borderRadius: 5,
  },

  illustrationContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 170,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },

  filterIcon: {
    borderRadius: 10,
    backgroundColor: '#c1175b',
    padding: 10,
    marginTop: -5,
  },
});

export default SignUpFirstStepScreen;
