/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import BtnImage from '../../assets/images/btn.png';
import BtnChoose from '../../assets/images/btn-choose.png';
import BtnDark from '../../assets/images/btnDark.png';
import BtnSaveChange from '../../assets/images/btnSaveChange.png';

export const Button = ({
  title,
  height,
  width,
  isActive,
  fontSize,
  zIndex,
  position,
  onPress,
  isDark,
  marginBottomText,
  isSaveChange,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        height: height ? height : 48,
        width: width ? width : 130,
        zIndex: zIndex,
        position,
      }}
      onPress={onPress}>
      <Text
        style={{
          ...styles.text,
          fontSize: fontSize ? fontSize : 18,
          marginBottom: marginBottomText,
        }}>
        {title}
      </Text>
      <Image
        source={
          isActive
            ? BtnChoose
            : isDark
            ? BtnDark
            : isSaveChange
            ? BtnSaveChange
            : BtnImage
        }
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: 'white', fontSize: 18, fontWeight: '700'},
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    zIndex: -1,
  },
});
