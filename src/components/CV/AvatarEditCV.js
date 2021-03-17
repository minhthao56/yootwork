import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AvartaImage from '../../assets/images/avatar.png';

const AvatarEditCV = ({title}) => {
  return (
    <View style={styles.info}>
      <View>
        <Text style={styles.textName}>NGUYEN THI{'\n'}HONG NGOC</Text>
        <View style={styles.titleName}>
          <Text style={styles.text}> {title}</Text>
        </View>
      </View>
      <Image source={AvartaImage} style={styles.avarta} />
    </View>
  );
};
export default AvatarEditCV;

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    width: '100%',
  },
  textName: {
    color: 'white',
    fontSize: 21,
    lineHeight: 32,
  },

  titleName: {
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginVertical: 16,
    marginBottom: 12,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    lineHeight: 22,
  },
  avarta: {
    height: 124,
    width: 124,
    resizeMode: 'contain',
  },
});
