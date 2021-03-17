/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {SvgCamera, SvgClock, SvgJob} from '../../assets/svg';

export default function LayoutInput({title, children, isShowSelection}) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>{title}</Text>
      </View>
      {children}
      <TouchableOpacity style={styles.btnSave}>
        <LinearGradient
          colors={['rgba(0,192,42,1)', 'rgba(139,255,165,1)']}
          style={styles.linearGradient}>
          <Text style={styles.textSave}>LƯU</Text>
        </LinearGradient>
      </TouchableOpacity>
      {isShowSelection && (
        <View style={{width: 150}}>
          <Menu>
            <MenuTrigger>
              <View style={styles.btnHoppy}>
                <Text style={styles.text}>Chọn sở thích</Text>
              </View>
              <View style={{marginLeft: 10, width: 100}}>
                <Text style={{color: 'white', opacity: 0}}>wqdwdwq</Text>
                <Text style={{color: 'white', opacity: 0}}>wqdwdwq</Text>
              </View>
            </MenuTrigger>
            <MenuOptions
              optionsContainerStyle={{
                backgroundColor: 'rgba(0,0,0,0.0)',
                elevation: 0,
                width: 144,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 8,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: 'white',
                height: 200,
              }}>
              <View style={{width: 144, height: 200}}>
                <MenuOption style={{height: 38, justifyContent: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      marginLeft: 8,
                    }}>
                    <SvgClock />
                    <Text style={{color: 'white', marginLeft: 6, fontSize: 17}}>
                      Nghĩ ngơi
                    </Text>
                  </View>
                </MenuOption>
                <MenuOption style={{height: 38, justifyContent: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      marginLeft: 8,
                    }}>
                    <SvgCamera />
                    <Text style={{color: 'white', marginLeft: 6, fontSize: 17}}>
                      Chụp hình
                    </Text>
                  </View>
                </MenuOption>
                <MenuOption style={{height: 38, justifyContent: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      marginLeft: 8,
                    }}>
                    <SvgJob />
                    <Text style={{color: 'white', marginLeft: 6, fontSize: 17}}>
                      Đi học
                    </Text>
                  </View>
                </MenuOption>
                <MenuOption style={{height: 38, justifyContent: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      marginLeft: 8,
                    }}>
                    <SvgClock />
                    <Text style={{color: 'white', marginLeft: 6, fontSize: 17}}>
                      Nghĩ ngơi
                    </Text>
                  </View>
                </MenuOption>
              </View>
            </MenuOptions>
          </Menu>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  title: {
    borderWidth: 0.5,
    borderColor: 'white',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 10,
    position: 'absolute',
    top: -12,
    left: 12,
    backgroundColor: 'black',
    width: 130,
    alignItems: 'center',
  },
  btnSave: {
    width: 80,
    height: 22,
    position: 'absolute',
    bottom: -10,
    right: 25,
  },
  textSave: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  linearGradient: {
    width: 80,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnHoppy: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    bottom: -8,
    left: 16,
    backgroundColor: 'black',
    width: 100,
    justifyContent: 'center',
    height: 22,
    zIndex: 100,
  },
});
