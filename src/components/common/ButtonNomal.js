/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const ButtonNomal = ({title, height, width, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['rgba(139,255,165,1)', 'rgba(0,192,42,1)']}
        style={{
          height: height || 38,
          width: width || 120,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
