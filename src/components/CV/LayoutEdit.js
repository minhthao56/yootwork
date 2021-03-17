import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Dimensions, Keyboard} from 'react-native';
import {AvatarEditCV} from '..';
import {Button} from '../common';
const {width} = Dimensions.get('window');

const LayoutEdit = ({children}) => {
  const [isShowBtnSave, setIsShowBtnSave] = useState(true);

  // useEffect(() => {
  //   Keyboard.addListener('keyboardDidShow', () => {
  //     setIsShowBtnSave(false);
  //   });
  //   Keyboard.addListener('keyboardDidHide', () => {
  //     setIsShowBtnSave(true);
  //   });
  //   return () => {
  //     Keyboard.removeListener('keyboardDidShow');
  //     Keyboard.removeListener('keyboardDidHide');
  //   };
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <AvatarEditCV title="Vị trí ứng tuyển" />
        {children}
      </View>
      {isShowBtnSave && (
        <Button
          title="LƯU THAY ĐỐI"
          isSaveChange={true}
          height={65}
          width={250}
        />
      )}
    </View>
  );
};
export default LayoutEdit;

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    flex: 1,
    borderRadius: 30,
    width: width * 0.9,
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 8,
  },
});
