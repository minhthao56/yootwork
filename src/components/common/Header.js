/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';
import BgHeader from '../../assets/images/btnHeader.png';
import IconBack from '../../assets/icons/back-icon.png';
import IconMenu from '../../assets/icons/menu-icon.png';
import BgMenuDown from '../../assets/images/bg-menu-down.png';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export const Header = ({onPress, goBack}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        zIndex: 1,
      }}>
      <ImageBackground
        source={BgHeader}
        style={{
          height: 40,
          width: 40,
          justifyContent: 'center',
          alignItems: 'center',
          resizeMode: 'contain',
        }}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={goBack}>
          <Image source={IconBack} style={{width: 10, height: 17}} />
        </TouchableOpacity>
      </ImageBackground>

      <View>
        <Menu>
          <MenuTrigger>
            <View>
              <Text style={{opacity: 0, height: 40, width: 40}}>C</Text>
              <ImageBackground
                source={BgHeader}
                style={{
                  height: 40,
                  width: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  resizeMode: 'contain',
                  position: 'absolute',
                  zIndex: -1,
                }}>
                <TouchableOpacity
                  style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={IconMenu} style={{width: 18, height: 14}} />
                </TouchableOpacity>
              </ImageBackground>
            </View>
          </MenuTrigger>
          <MenuOptions
            optionsContainerStyle={{
              backgroundColor: 'rgba(255,255,255,0.85)',
              elevation: 0,
              marginTop: 30,
              width: 144,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ImageBackground
              source={BgMenuDown}
              style={{width: 144, height: 282}}>
              <MenuOption
                onSelect={onPress}
                style={{height: 54, justifyContent: 'center'}}>
                <Text style={styles.textOption}>TẠO CV</Text>
              </MenuOption>
              <MenuOption
                onSelect={onPress}
                style={{height: 54, justifyContent: 'center'}}>
                <Text style={styles.textOption}> CHỌN NHIỀU</Text>
              </MenuOption>
              <MenuOption
                onSelect={onPress}
                style={{height: 54, justifyContent: 'center'}}>
                <Text style={styles.textOption}>ĐÃ GỬI</Text>
              </MenuOption>
              <MenuOption
                onSelect={onPress}
                style={{height: 54, justifyContent: 'center'}}>
                <Text style={styles.textOption}> ĐÁNH GIÁ</Text>
              </MenuOption>
              <MenuOption
                onSelect={onPress}
                style={{height: 54, justifyContent: 'center'}}>
                <Text style={styles.textOption}> TRỢ GIÚP</Text>
              </MenuOption>
            </ImageBackground>
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textOption: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
  },
});
