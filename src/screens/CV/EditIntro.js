import React from 'react';
import {StyleSheet, TextInput, View, KeyboardAvoidingView} from 'react-native';
import {LayoutEdit, ContainerEditCV, LayoutInput} from '../../components';

export const EditIntro = ({navigation}) => {
  return (
    <KeyboardAvoidingView behavior="height">
      <ContainerEditCV navigation={navigation}>
        <LayoutEdit>
          <LayoutInput title={'Giới thiệu bản thân '}>
            <View style={styles.container}>
              <TextInput multiline={true} style={styles.input} />
            </View>
          </LayoutInput>
        </LayoutEdit>
      </ContainerEditCV>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    color: 'white',
  },
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    paddingLeft: 8,
    paddingTop: 8,
  },
});
