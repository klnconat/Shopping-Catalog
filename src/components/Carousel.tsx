import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Carousel from 'pinar';

import PromotionListItemContainer from './PromotionListItemContainer';

type CustomProps = {
  promotionList: any;
};

const CarouselComponent = (props: CustomProps) => {
  const [activeDotColor, setActiveDotColor] = useState('#bfbfbf');

  const onIndexChanged = ({index}: {index: any}) => {
    setActiveDotColor(props.promotionList[index].PromotionCardColor);
  };

  return (
    <Carousel
      dotStyle={styles.dotStyle}
      activeDotStyle={[
        styles.activeDotStyle,
        {backgroundColor: activeDotColor},
      ]}
      index={0}
      showsControls={false}
      onIndexChanged={onIndexChanged}>
      {props.promotionList.map((item: any) => {
        return <PromotionListItemContainer item={item} key={item.Id} />;
      })}
    </Carousel>
  );
};

export default CarouselComponent;

const styles = StyleSheet.create({
  dotStyle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#BFBFBF',
    marginRight: 5,
  },
  activeDotStyle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#EA7432',
    marginRight: 5,
  },
  slide: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
