import {View, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  useInstantSearch,
  useSearchBox,
  UseSearchBoxProps,
} from 'react-instantsearch-hooks';
import {Searchbar, useTheme} from 'react-native-paper';
import {SearchIcon, ClearIcon} from '../../src/assets';

interface SearchBoxProps extends UseSearchBoxProps {
  onChange: () => void;
}

const SearchBox = (props: SearchBoxProps) => {
  const {query, refine} = useSearchBox(props);
  const {indexUiState, status} = useInstantSearch();
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef<TextInput | null>(null);
  const {colors} = useTheme();

  const setQuery = (newQuery: string) => {
    setInputValue(newQuery);
    refine(newQuery);
    props.onChange();
  };

  return (
    <View>
      <Searchbar
        ref={inputRef}
        value={inputValue}
        onChangeText={setQuery}
        clearButtonMode="unless-editing"
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
        elevation={0}
        placeholder="Введите название группы..."
        inputStyle={{
          fontSize: 15,
          padding: 0,

          paddingLeft: 0,
        }}
        loading={status === 'loading'}
        placeholderTextColor={colors.tertiary}
        clearIcon={() =>
          indexUiState.query && (
            <ClearIcon width={20} height={20} fill={colors.tertiary} />
          )
        }
        icon={() => (
          <SearchIcon width={25} height={25} fill={colors.tertiary} />
        )}
      />
    </View>
  );
};

export default SearchBox;
