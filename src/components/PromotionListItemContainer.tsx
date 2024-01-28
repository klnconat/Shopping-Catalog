import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import {RootStackParamList} from '../types/types'

type CustomProps = {
  item: any;
};

const promotionListItemContainer = (props: CustomProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  let diffDays = moment(props.item.RemainingText, 'DD-MM-YYYY').diff(
    moment(),
    'days',
  );

  return (
    <View style={[styles.slide, {backgroundColor: props.item.PromotionCardColor}]} key={0}>
      <View
        style={[
          styles.slide,
        {alignItems: 'center', marginBottom: 10}
        ]}
        key={0}>
        <ImageBackground
          source={{uri: props.item.ImageUrl}}
          style={styles.image}
          borderTopRightRadius={20}
          borderTopLeftRadius={20}
          borderBottomRightRadius={20}
          borderBottomLeftRadius={100}>
          <View style={styles.centered}>
            <View style={styles.circle}>
              <Image
                source={{uri: props.item.BrandIconUrl}}
                style={styles.brandImage}
              />
            </View>
            <View style={styles.remainingDayContainer}>
              <Text style={styles.remainingDayText}>Son {diffDays} Gün</Text>
            </View>
          </View>
        </ImageBackground>
        <Text style={styles.headerText}> {props.item.Title} </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailPage', {id: props.item.Id});
          }}>
          <Text
            style={[styles.headerText, {color: props.item.PromotionCardColor}]}>
            {' '}
            Daha Daha{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default promotionListItemContainer;

const styles = StyleSheet.create({
  slide: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  image: {
    height: Dimensions.get('window').width - 80,
    width: Dimensions.get('window').width - 80,
    marginTop: 10,
  },
  brandImage: {
    height: 55,
    width: 55,
  },
  centered: {
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    flexDirection: 'row',
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  remainingDayContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#1D1E1C',
    borderWidth: 1.5,
    borderColor: '#1D1E1C',
    borderRadius: 26,
    marginRight: 5,
    height: 32,
  },
  remainingDayText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  headerText: {
    color: '#1D1E1C',
    fontSize: 14,
    fontFamily: 'Helvetica',
    marginTop: 15,
    textAlign: 'center',
    marginHorizontal: 60,
    marginBottom: 20
  },
});
