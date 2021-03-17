import React from 'react';
import {ImageBackground, StyleSheet, View, StatusBar} from 'react-native';

import BgGeneral from '../../assets/images/bg-general.jpeg';
import {Header} from '../common';
import {useIsFocused} from '@react-navigation/core';

const ContainerEditCV = ({navigation, children}) => {
  const isFocused = useIsFocused();

  return (
    <>
      {isFocused ? (
        <StatusBar backgroundColor="#333" barStyle="light-content" />
      ) : null}
      <ImageBackground source={BgGeneral} style={styles.bgGeneral}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Header goBack={() => navigation.goBack()} />
          </View>
          {children}
        </View>
      </ImageBackground>
    </>
  );
};

export default ContainerEditCV;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.51)',
    flex: 1,
    zIndex: 0,
  },
  bgGeneral: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    zIndex: -3,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
});
