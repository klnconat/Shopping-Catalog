import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type CustomProps = {
  title: any;
  description: any;
};

const Paragraph = (props: CustomProps) => {
  return (
    <View>
      <Text style={styles.header}> {props.title} </Text>
      <Text style={styles.text}> {props.description} </Text>
    </View>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  header: {
    color: '#1D1E1C',
    fontSize: 16,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  text: {
    color: '#1D1E1C',
    fontSize: 12,
    fontFamily: 'Helvetica',
    marginHorizontal: 20,
  },
});
