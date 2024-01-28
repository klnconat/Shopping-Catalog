import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import TagListItemContainer from '../components/TagListItemContainer';
import Carousel from '../components/Carousel';

import {ITagItem, IPromotionItem} from '../types/types';

import itemService from '../../service/item-service';

const HomePage = () => {

  const [tagList, setTagList] = useState<ITagItem[]>([
    {
      IconUrl: '',
      Id: 0,
      Name: '',
      Rank: 0,
    },
  ]);

  const [promotionList, setPromotionList] = useState<IPromotionItem[]>([]);

  const getTagList = () => {
    itemService
      .getTagList()
      .then(response => {
        setTagList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const getPromotionList = () => {
    itemService
      .getPromotionList()
      .then(response => {
        setPromotionList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTagList();
    getPromotionList();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <Image source={require('../assets/homePage/dahadaha.png')} />
        <View style={styles.container4}>
          <TouchableOpacity style={styles.container3}>
            <Text style={styles.loginText}>Giriş Yap</Text>
          </TouchableOpacity>
          <View style={styles.circle}>
            <Image source={require('../assets/homePage/Profile.png')} />
          </View>
        </View>
      </View>
      <View>
        <FlatList
          data={tagList}
          keyExtractor={(item: ITagItem) => item.IconUrl}
          renderItem={({item}: {item: ITagItem}) => {
            return (
              <TagListItemContainer
                IconUrl={item.IconUrl}
                Id={item.Id}
                Name={item.Name}
                Rank={item.Rank}
              />
            );
          }}
          horizontal
        />
      </View>
      <View style={styles.wrapper}>
        <Carousel promotionList={promotionList} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  container3: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F40000',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  container4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#1D1E1C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 25,
  },
});
export default HomePage;
