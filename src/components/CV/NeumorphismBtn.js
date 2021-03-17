/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';

export default function NeumorphismBtn({
  children,
  width,
  height,
  inner,
  shadowOpacity,
  shadowRadius,
  borderRadius,
  backgroundColor,
  marginBottom,
  borderWidthInsilde,
  borderColorInsilde,
}) {
  return (
    <Neomorph
      darkShadowColor="#999"
      lightShadowColor="white"
      inner={inner || false}
      style={{
        shadowOpacity: shadowOpacity || 0.6,
        shadowRadius: shadowRadius || 6,
        borderRadius: borderRadius || 20,
        backgroundColor: backgroundColor || '#DDD',
        width: width || 190,
        height: height || 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: marginBottom || 8,
      }}>
      <View
        style={{
          borderWidth: borderWidthInsilde || 1.5,
          borderColor: borderColorInsilde || 'white',
          borderRadius: 16,
          flexDirection: 'row',
          alignItems: 'center',
          height: '78%',
          width: '94%',
          justifyContent: 'space-around',
        }}>
        {children}
      </View>
    </Neomorph>
  );
}
