import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SvgCamera} from '../../assets/svg';

const SelectionBtn = ({isHasCamera, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      {isHasCamera && <SvgCamera />}
    </TouchableOpacity>
  );
};

export default SelectionBtn;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});
