import React, {Fragment} from 'react';
import {
  StyleSheet,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {
  useClearRefinements,
  useCurrentRefinements,
  useRefinementList,
  UseRefinementListProps,
} from 'react-instantsearch-hooks';
import {TuneIcon, CheckIcon, ClearIcon} from '../../src/assets';
import {Badge, Chip, useTheme, Button, IconButton} from 'react-native-paper';
import {getTheme} from 'react-native-paper/lib/typescript/core/theming';
interface FiltersProps extends UseRefinementListProps {
  onChange: () => void;
  isModalOpen: boolean;
  toggleModal: () => void;
}

const Filters = ({onChange, isModalOpen, toggleModal}: FiltersProps) => {
  const {canRefine: canClear, refine: clear} = useClearRefinements();
  const {items: currentRefinements} = useCurrentRefinements();
  const totalRefinements = currentRefinements.reduce(
    (acc, {refinements}) => acc + refinements.length,
    0,
  );

  const {items: courseItems, refine: courseRefine} = useRefinementList({
    attribute: 'course',
  });

  const {items: degreeItems, refine: degreeRefine} = useRefinementList({
    attribute: 'degree',
  });

  const {items: facultyItems, refine: facultyRefine} = useRefinementList({
    attribute: 'faculty',
  });

  const {items: formOfEducationItems, refine: formOfEducationRefine} =
    useRefinementList({
      attribute: 'formOfEducation',
    });

  const filters = [
    {data: courseItems, title: 'Курс обучения', refine: courseRefine},
    {
      data: formOfEducationItems,
      title: 'Форма обучения',
      refine: formOfEducationRefine,
    },
    {data: facultyItems, title: 'Факультет', refine: facultyRefine},

    {data: degreeItems, title: 'Степень', refine: degreeRefine},
  ];

  const {colors} = useTheme();

  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={{padding: 30}}>
        <Text>Фильтры</Text>
        <View style={styles.filterResetButton}>
          <Button
            textColor="#252b33"
            disabled={!canClear}
            onPress={() => {
              clear();
              onChange();
              toggleModal();
            }}>
            Сбросить
          </Button>
        </View>
        <FlatList
          data={filters}
          style={styles.container}
          keyExtractor={(item, index) => item.title + index}
          renderItem={({item: {data, title, refine}}) => (
            <Fragment>
              <View>
                <Text style={styles.titleText}>{title}</Text>
              </View>
              <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.filterContainer}
                keyExtractor={({label, count}) => label + count}
                renderItem={({item: filter}) => (
                  <TouchableOpacity
                    key={filter.value}
                    onPress={() => refine(filter.value)}
                    style={styles.filterGap}>
                    <Chip
                      style={[
                        styles.item,
                        {
                          borderColor: filter.isRefined
                            ? colors.primary
                            : 'transparent',
                          borderWidth: filter.isRefined ? 2 : 0,
                        },
                      ]}
                      compact>
                      <View>
                        <Text
                          style={[
                            styles.labelText,
                            {
                              color: filter.isRefined
                                ? '#000'
                                : colors.tertiary,
                            },
                          ]}>
                          {filter.label}
                        </Text>
                      </View>

                      <View>
                        <Badge
                          adjustsFontSizeToFit
                          style={{
                            marginLeft: 4,
                            backgroundColor: 'transparent',
                            color: '#000',
                          }}>
                          {`(${filter.count})`}
                        </Badge>
                      </View>
                    </Chip>
                  </TouchableOpacity>
                )}
              />
            </Fragment>
          )}
        />
        <View style={styles.filterListButtonContainer}>
          <Button
            buttonColor={colors.primary}
            style={styles.filterAcceptButton}
            onPress={toggleModal}
            textColor="#fff">
            Применить
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#ffffff',
  },
  filterIcon: {
    borderRadius: 10,
    backgroundColor: '#c1175b',
    padding: 10,
    alignSelf: 'flex-start',
  },
  titleText: {
    fontSize: 16,
    color: '#000',
  },
  list: {
    marginTop: 32,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 30,
    marginTop: 10,
  },
  filterGap: {paddingRight: 15},
  item: {
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemCountText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 10,
  },
  labelText: {
    fontSize: 16,
  },
  filterListButtonContainer: {
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  filterResetButton: {position: 'absolute', top: 20, right: 0, zIndex: 10},
  filterAcceptButton: {
    paddingVertical: 5,
    borderRadius: 10,
  },
  filtersButton: {
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filtersButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Filters;
