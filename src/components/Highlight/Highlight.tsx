import React, {Fragment, PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  getHighlightedParts,
  getPropertyByPath,
} from 'instantsearch.js/es/lib/utils';

import {Hit} from 'instantsearch.js';
import {useTheme} from 'react-native-paper';

type HighlightPartProps = PropsWithChildren<{
  isHighlighted: boolean;
}>;

type HighlightProps = {
  hit: Hit;
  attribute: string;
  separator: string;
};

const HighlightPart = ({children, isHighlighted}: HighlightPartProps) => {
  return (
    <View style={styles.highlightedPartContainer}>
      <Text
        style={isHighlighted ? styles.highlightedText : styles.nonHighlighted}>
        {children}
      </Text>
      <View
        style={[
          styles.highlitedPart,
          {
            backgroundColor: isHighlighted ? '#c1175b' : 'transparent',
          },
        ]}>
        <Text style={{color: 'transparent'}}>{children}</Text>
      </View>
    </View>
  );
};

const Highlight = ({hit, attribute, separator = ', '}: HighlightProps) => {
  const {value: attributeValue = ''} =
    getPropertyByPath(hit._highlightResult, attribute) || {};
  const parts = getHighlightedParts(attributeValue);
  const {colors} = useTheme();
  return (
    <>
      {parts.map((part, partIndex) => {
        if (Array.isArray(part)) {
          const isLastPart = partIndex === parts.length - 1;

          return (
            <Fragment key={partIndex}>
              {part.map((subPart, subPartIndex) => (
                <HighlightPart
                  key={subPartIndex}
                  isHighlighted={subPart.isHighlighted}>
                  {subPart.value}
                </HighlightPart>
              ))}

              {!isLastPart && separator}
            </Fragment>
          );
        }

        return (
          <HighlightPart key={partIndex} isHighlighted={part.isHighlighted}>
            {part.value}
          </HighlightPart>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  highlightedText: {
    fontWeight: 'bold',
    // color: '#c1175b',
  },
  highlightedPartContainer: {
    position: 'relative',
  },
  highlitedPart: {
    top: 0,
    borderRadius: 5,
    opacity: 0.3,
    position: 'absolute',
  },

  nonHighlighted: {
    fontWeight: 'normal',
    backgroundColor: 'transparent',
  },
});
export default Highlight;
