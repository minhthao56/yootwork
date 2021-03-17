/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Dimensions,
  FlatList,
  Image,
  Animated,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CV from '../../assets/images/cv.png';
import CV3 from '../../assets/images/cv3.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DATA = [CV, CV3, CV, CV3, CV, CV3];
const ITEM_SIZE = windowWidth * 0.73;

const BackDropCV = ({scrollX}) => {
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        position: 'absolute',
      }}>
      <FlatList
        data={DATA}
        removeClippedSubviews={false}
        horizontal={true}
        contentContainerStyle={{width: windowWidth, height: windowHeight}}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
          ];
          const outputRange = [-windowWidth, 0, 0];
          const translateX = scrollX.interpolate({inputRange, outputRange});
          return (
            <Animated.View
              style={[
                StyleSheet.absoluteFillObject,
                {
                  transform: [{translateX}],
                  width: windowWidth,
                  height: windowHeight,
                },
              ]}>
              <Image
                source={item}
                style={{
                  resizeMode: 'cover',
                  width: windowWidth,
                  height: windowHeight,
                }}
              />
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
              />
            </Animated.View>
          );
        }}
        keyExtractor={(item, i) => i.toString()}
        ItemSeparatorComponent={() => <View style={{width: 0}} />}
      />

      <LinearGradient
        colors={[
          'rgba(14,33,118,0.07)',
          'rgba(23,32,79,0.49)',
          'rgba(0,6,55,1)',
        ]}
        style={{
          position: 'absolute',
          top: 0,
          height: windowHeight,
          width: windowWidth,
        }}
      />
    </View>
  );
};

export default BackDropCV;
