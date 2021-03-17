/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import CV2 from '../../assets/images/cv2.png';
import CV3 from '../../assets/images/cv3.png';

import Blur from '../../assets/images/blur.png';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const CardCV = ({handleSelectCV, index}) => {
  return (
    <View
      style={{
        width: windowWidth * 0.73,
        height: windowHeight * 0.7,
      }}>
      <ImageBackground
        source={Blur}
        style={styles.image}
        imageStyle={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
        <View
          style={{
            width: '100%',
            padding: 12,
            alignItems: 'center',
          }}>
          <Image
            source={index % 2 === 0 ? CV2 : CV3}
            style={{
              width: '98%',
              height: '62%',
              borderRadius: 20,
              padding: 4,
              marginBottom: 8,
            }}
          />
          <Text style={styles.text}>MẪU CV 1</Text>
          <View style={{flexDirection: 'row', marginBottom: 8}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 20,
                marginRight: 8,
              }}>
              <Text
                style={{
                  color: 'white',
                  paddingHorizontal: 4,
                  paddingVertical: 2,
                }}>
                SÁNG TẠO
              </Text>
            </View>
            <View
              style={{borderWidth: 1, borderColor: 'white', borderRadius: 20}}>
              <Text
                style={{
                  color: 'white',
                  paddingHorizontal: 4,
                  paddingVertical: 2,
                }}>
                CHUYÊN NGHIỆP
              </Text>
            </View>
          </View>
          <Text style={{textAlign: 'center', color: 'white'}}>
            Thường sử dụng cho các ngành: văn phòng,Marketing hoặc các ngành
            liên quan đến xã hội
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              width: 160,
              borderColor: 'white',
              height: 44,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
            }}
            onPress={handleSelectCV}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '700'}}>
              SỬ DỤNG MẪU NÀY
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
});

export default CardCV;
