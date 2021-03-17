/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';

export const NeumorphismHeader = ({navigation}) => {
  return (
    <View style={{width: '100%'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Neomorph
          darkShadowColor="#888" // <- set this
          lightShadowColor="white" // <- this
          style={{
            shadowOpacity: 0.5, // <- and this or yours opacity
            shadowRadius: 5,
            borderRadius: 50,
            backgroundColor: '#DDD',
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
