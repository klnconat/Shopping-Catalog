import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

type CustomProps = {
  IconUrl: string;
  Id: number;
  Name: string;
  Rank: number;
};

const tagListItemContainer = (props: CustomProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: props.IconUrl}} style={styles.image}/>
      <Text style={styles.nameText}> {props.Name} </Text>
    </TouchableOpacity>
  );
};

export default tagListItemContainer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row', 
    paddingLeft: 6,
    paddingRight: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#ECEEEF',
    borderRadius: 8,
    height: 40,
    marginRight: 5
  },
  nameText: {
    color: '#1D1E1C',
    fontSize: 12,
    fontFamily: 'Helvetica',
    marginLeft: 5
  },
  image: {
    height: 24,
    width: 24,
  }
});
