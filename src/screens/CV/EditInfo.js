import React from 'react';
import {StyleSheet, View} from 'react-native';

import {
  ContainerEditCV,
  LayoutEdit,
  LayoutInput,
  InputEditCV,
} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  SvgCake,
  SvgPhone,
  SvgGender,
  SvgEmail,
  SvgHome,
} from '../../assets/svg';

export const EditInfo = ({navigation}) => {
  return (
    <ContainerEditCV navigation={navigation}>
      <KeyboardAwareScrollView>
        <LayoutEdit>
          <LayoutInput title={'Thông tin cơ bản'}>
            <View style={styles.container}>
              <InputEditCV icon={<SvgCake />} />
              <InputEditCV icon={<SvgPhone />} />
              <InputEditCV icon={<SvgGender />} />
              <InputEditCV icon={<SvgEmail />} />
              <InputEditCV icon={<SvgHome />} multiline={true} height={80} />
            </View>
          </LayoutInput>
        </LayoutEdit>
      </KeyboardAwareScrollView>
    </ContainerEditCV>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
});
