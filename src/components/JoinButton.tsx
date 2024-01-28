import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

type CustomProps = {
    name: any;
  };

const CommonButton = (props: CustomProps) => {
  return (
    <TouchableOpacity style={styles.saveBox}>
      <Text
        style={styles.saveText}
        accessibilityLabel={props.name}
        testID={props.name}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  saveBox: {
    height: 56,
    backgroundColor: '#F40000',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width - 20,
  },
  saveText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    letterSpacing: 1,
  },
});

export default CommonButton;
