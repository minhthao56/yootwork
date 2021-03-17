/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Animated, TouchableOpacity} from 'react-native';

import CV1 from '../../assets/images/01.png';
import CV2 from '../../assets/images/02.png';
import FormCV from '../../assets/images/cv2.png';
import BgTrash from '../../assets/images/bg-trash.png';
import {SvgClock, SvgTrash} from '../../assets/svg';
import {Button} from '../common';

const CardMyCV = ({
  index,
  translateY,
  handleDeleteCV,
  scale,
  handleDetailCV,
  source,
}) => {
  return (
    <Animated.View
      style={{
        height: 330,
        width: 255,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        transform: [{scale: scale}],
      }}>
      <Image
        source={index % 2 === 0 ? CV1 : CV2}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
          zIndex: -1,
        }}
      />
      <TouchableOpacity
        style={{position: 'absolute', top: 8, right: 8}}
        onPress={() => handleDeleteCV(index)}>
        <View
          style={{
            position: 'relative',
            height: 33,
            width: 33,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={BgTrash}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
          <SvgTrash />
        </View>
      </TouchableOpacity>
      <Image
        source={source || FormCV}
        style={{
          width: '100%',
          height: '66%',
          resizeMode: 'contain',
          marginBottom: 8,
          marginRight: 20,
          borderRadius: 20,
        }}
      />
      <View style={{width: '100%', paddingHorizontal: 28}}>
        <Text
          style={{
            color: 'white',
            marginBottom: 4,
            fontSize: 16,
            fontWeight: '700',
          }}>
          CV Graphic Design
        </Text>
        <View style={{flexDirection: 'row'}}>
          <SvgClock />
          <Text
            style={{
              color: 'white',
              marginLeft: 4,
              fontSize: 12,
              fontWeight: '300',
            }}>
            21/02/2021 14:41
          </Text>
        </View>
      </View>

      <View style={{position: 'absolute', right: 22, bottom: 22}}>
        <Button
          title="XEM"
          isActive
          height={24}
          width={60}
          fontSize={15}
          onPress={() => handleDetailCV(index)}
        />
      </View>
    </Animated.View>
  );
};

export default CardMyCV;
