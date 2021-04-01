/* eslint-disable react-native/no-inline-styles */
import {useIsFocused} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import BgGreen from '../../assets/images/blur-green.png';
import LogoWhite from '../../assets/images/logo-white.png';
import BgCard from '../../assets/images/bg-card-home.png';
const {width} = Dimensions.get('window');

const Btn = ({title}) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        padding: 8,
        alignSelf: 'flex-start',
      }}>
      <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const Home = () => {
  const isFocused = useIsFocused();
  return (
    <>
      {isFocused ? <StatusBar backgroundColor="#262626" /> : null}

      <View style={{backgroundColor: 'rgba(0,0,0,0.85)', flex: 1}}>
        <Image
          source={BgGreen}
          style={{
            width: 200,
            height: 400,
            position: 'absolute',
            zIndex: -1,
            right: 0,
            top: 24,
          }}
        />
        <View style={{marginLeft: 32, marginTop: 32, marginBottom: 32}}>
          <Image
            source={LogoWhite}
            style={{
              width: width * 0.5,
              height: width * 0.12,
              resizeMode: 'contain',
            }}
          />
          <Text style={{color: 'white', fontSize: 32, fontWeight: '700'}}>
            TUYỂN DỤNG
          </Text>
          <Text style={{color: 'white', fontSize: 17, fontWeight: '700'}}>
            MUỐN TÌM NHÂN TÀI
          </Text>
          <Text style={{color: 'white', fontSize: 17, fontWeight: '700'}}>
            SÁNH VAI CÙNG YOOT
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            marginLeft: 16,
          }}>
          <Btn title="QUẢN LÝ HIỆU QUẢ HƠN" />
          <Text style={{color: 'white', textDecorationLine: 'underline'}}>
            Xem tất cả
          </Text>
        </View>
      </View>
    </>
  );
};
