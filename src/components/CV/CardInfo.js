/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {
  SvgBack,
  SvgCake,
  SvgEmail,
  SvgGender,
  SvgHome,
  SvgPhone,
} from '../../assets/svg';
import BgInfo from '../../assets/images/bgInfo.png';
import BgBack from '../../assets/images/btnBack.png';
const {width} = Dimensions.get('screen');

export default function CardInfo({
  top,
  title,
  translateX,
  handleClose,
  position,
  isHaveBtnLose,
}) {
  return (
    <Animated.View
      style={{
        height: 160,
        position: position || 'absolute',
        right: 0,
        top: top ? top : 100,
        zIndex: 0,
        transform: [{translateX: translateX || 0}],
      }}>
      <ImageBackground
        style={{
          width: width * 0.93,
          height: 160,
          backgroundColor: 'rgba(150, 150,150, 0.8)',
          resizeMode: 'cover',
          borderRadius: 10,
        }}
        imageStyle={{borderRadius: 10}}
        source={BgInfo}>
        {isHaveBtnLose && (
          <ImageBackground
            style={{
              width: 31,
              height: 31,
              position: 'absolute',
              resizeMode: 'cover',
              justifyContent: 'center',
              alignItems: 'center',
              left: -10,
              top: 10,
            }}
            source={BgBack}>
            <TouchableOpacity
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={handleClose}>
              <SvgBack />
            </TouchableOpacity>
          </ImageBackground>
        )}

        <View
          style={{
            padding: 8,
            paddingLeft: 32,
            paddingTop: 16,
            paddingRight: 42,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '700',
              marginBottom: 8,
            }}>
            {title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 12,
                }}>
                <SvgCake height={18} width={18} />
                <Text style={{color: 'white', marginLeft: 8}}>
                  21 - 02 - 1996
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 12,
                }}>
                <SvgGender height={19} width={19} />
                <Text style={{color: 'white', marginLeft: 8}}>
                  21 - 02 - 1996
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 12,
                }}>
                <SvgPhone height={18} width={18} />
                <Text style={{color: 'white', marginLeft: 8}}>
                  21 - 02 - 1996
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 12,
                }}>
                <SvgEmail height={18} width={18} />
                <Text style={{color: 'white', marginLeft: 8}}>
                  21 - 02 - 1996
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <SvgHome width={25} height={20} />
            <Text style={{color: 'white', marginLeft: 8}}>
              396 Cach Mang Thang 8, phuong 8, quan 3, TP.HCM
            </Text>
          </View>
        </View>
      </ImageBackground>
    </Animated.View>
  );
}
