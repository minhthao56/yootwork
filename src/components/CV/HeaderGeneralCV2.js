/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';

export const HeaderGeneralCV2 = ({navigation}) => {
  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Neomorph
          darkShadowColor="#888"
          lightShadowColor="white"
          inner
          style={{
            shadowOpacity: 0.8,
            shadowRadius: 5,
            borderRadius: 50,
            backgroundColor: '#3BEDED',
            width: 46,
            height: 46,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{'<'}</Text>
        </Neomorph>
      </TouchableOpacity>
    </View>
  );
};
