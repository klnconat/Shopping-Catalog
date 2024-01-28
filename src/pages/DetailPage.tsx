import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

import Paragraph from '../components/Paragraph';
import JoinButton from '../components/JoinButton';

import {IPromotionItemDetail, RootStackParamList} from '../types/types';

import itemService from '../../service/item-service';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';


const DetailPage = () => {
  const navigation = useNavigation();

  let route: any = useRoute()

  const [promotionDetail, setPromotionDetail] =
    useState<IPromotionItemDetail>();

  const [remainingDayCount, setRemainingDayCount] = useState<number>();

  const getPromotionDetail = () => {
    itemService
      .getPromotionDetail(route.params?.id)
      .then(response => {
        setPromotionDetail(response.data);
        let diffDays = moment(response.data.RemainingText, 'DD-MM-YYYY').diff(
          moment(),
          'days',
        );
        setRemainingDayCount(diffDays);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPromotionDetail();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.paddingBottom}>
        <ImageBackground
          source={{uri: promotionDetail?.ImageUrl}}
          style={styles.image}
          borderBottomLeftRadius={100}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../assets/homePage/Back_Button.png')}
              style={styles.backButton}
            />
          </TouchableOpacity>
          <View style={styles.centered}>
            <View style={styles.circle}>
              <Image
                source={{uri: promotionDetail?.BrandIconUrl}}
                style={styles.brandImage}
              />
            </View>
            <View style={styles.remainingDayContainer}>
              <Text style={styles.remainingDayText}>
                Son {remainingDayCount} Gün
              </Text>
            </View>
          </View>
        </ImageBackground>
        <Text style={styles.headerText}> {promotionDetail?.Title} </Text>
        {promotionDetail?.PromotionDetailItemAreas.map((item: any) => {
          return (
            <Paragraph title={item.Title} description={item.Description} />
          );
        })}
      </ScrollView>
      <View style={styles.saveBoxCon1}>
        <JoinButton name="Hemen Katıl" />
      </View>
    </SafeAreaView>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  image: {
    height: Dimensions.get('window').width - 50,
    width: Dimensions.get('window').width,
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
  brandImage: {
    height: 55,
    width: 55,
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
    fontSize: 20,
    fontFamily: 'Helvetica',
    marginVertical: 15,
    marginHorizontal: 20,
  },
  backButton: {
    marginTop: 55,
    marginLeft: 15,
  },
  paddingBottom: {paddingBottom: 50},
  saveBoxCon1: {
    alignItems: 'center',
    marginBottom: 16,
  },
});
