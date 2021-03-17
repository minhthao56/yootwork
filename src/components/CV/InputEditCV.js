import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export default function InputEditCV({icon, multiline, numberOfLines, height}) {
  return (
    <View style={styles.container}>
      {icon}
      <>
        <TextInput style={{...styles.input, height}} />
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    borderRadius: 5,
    marginLeft: 24,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 0,
    width: '70%',
    justifyContent: 'flex-start',
  },
});
