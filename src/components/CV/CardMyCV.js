/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import CV1 from '../../assets/images/01.png';
import CV2 from '../../assets/images/02.png';
import FormCV from '../../assets/images/cv2.png';
import {SvgClock, SvgTrash} from '../../assets/svg';
import {ButtonNomal} from '../common';

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
          resizeMode: 'stretch',
          zIndex: -1,
        }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 12,
          right: 12,
          borderWidth: 2,
          borderColor: 'white',
          padding: 6,
          borderRadius: 100,
        }}
        onPress={() => handleDeleteCV(index)}>
        <SvgTrash />
      </TouchableOpacity>

      <ImageBackground
        source={source || FormCV}
        style={{
          width: 120,
          height: 120,
          resizeMode: 'contain',
          marginBottom: 8,
          marginRight: 20,
        }}
        imageStyle={{borderRadius: 100, borderWidth: 10, borderColor: 'white'}}
      />
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: '700',
          marginBottom: 6,
          textAlign: 'center',
        }}>
        NGUYỄN THỊ KIỀU TRANG
      </Text>

      <View style={{width: '100%', paddingHorizontal: 28}}>
        <Text
          style={{
            color: 'white',
            marginBottom: 4,
            fontSize: 16,
            textAlign: 'center',
          }}>
          <Text style={{fontWeight: '700'}}>Vị trí: </Text>
          Chuyên viên Marketing
        </Text>
        <Text style={{color: 'white', marginBottom: 6, textAlign: 'center'}}>
          <Text style={{fontWeight: '700'}}>Học Vấn:</Text> Đại học
        </Text>
        <Text style={{color: 'white', marginBottom: 6, textAlign: 'center'}}>
          <Text style={{fontWeight: '700'}}>Kinh nghiệm:</Text> 2 năm
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 12,
          }}>
          <SvgClock />
          <Text
            style={{
              color: 'white',
              marginLeft: 6,
              fontSize: 12,
              fontWeight: '300',
            }}>
            21/02/2021 14:41
          </Text>
        </View>
      </View>
      <ButtonNomal title="XEM CHI TIẾT" onPress={() => handleDetailCV(index)} />
    </Animated.View>
  );
};

export default CardMyCV;
