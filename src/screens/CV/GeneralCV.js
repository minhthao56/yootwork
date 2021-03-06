/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  Platform,
  SafeAreaView,
} from 'react-native';
import {ContainerEditCV, AvatarEditCV, CardInfo} from '../../components';
import bgQualities from '../../assets/images/bg-qualities.png';
import bgMain from '../../assets/images/bg-main.png';
import ImageSkill from '../../assets/images/skill1.png';

import {Button} from '../../components/common';
const {height, width} = Dimensions.get('screen');

const DATA = [ImageSkill, ImageSkill, ImageSkill, ImageSkill, ImageSkill];

export const GeneralCV = ({navigation}) => {
  // const translateXInfo = useRef(new Animated.Value(width)).current;
  // const translateXHobbdy = useRef(new Animated.Value(width)).current;
  // const translateBtnInfo = useRef(new Animated.Value(0)).current;
  // const translateBtnHobby = useRef(new Animated.Value(0)).current;

  // const handleShowInfo = () => {
  //   Animated.timing(translateXInfo, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  //   Animated.timing(translateBtnInfo, {
  //     toValue: width,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const handleCloseInfo = () => {
  //   Animated.timing(translateXInfo, {
  //     toValue: width,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  //   Animated.timing(translateBtnInfo, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const handleShowHobby = () => {
  //   Animated.timing(translateXHobbdy, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  //   Animated.timing(translateBtnHobby, {
  //     toValue: width,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const handleCloseHobby = () => {
  //   Animated.timing(translateXHobbdy, {
  //     toValue: width,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  //   Animated.timing(translateBtnHobby, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // };
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <>
      <ContainerEditCV navigation={navigation}>
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 32}}
          style={{paddingHorizontal: 8}}>
          <CardInfo title="TH??NG TIN C?? B???N" />
          <AvatarEditCV title={'Chuy??n vi??n Marketing'} />
          <View style={{marginTop: 150}}>
            <Text style={styles.title}>H???C V???N</Text>
            <Text style={styles.textBody}>
              08/2018 ??? 01/2020 T???t nghi???p c??? nh??n chuy??n ng??nh Marketing Tr?????ng
              ?????i h???c Kinh t??? TP.HCM Khoa: Qu???n tr??? kinh doanh ??i???m trung b??nh:
              7.0
            </Text>
            <Text style={styles.title}>KI???N TH???C </Text>
            <Text style={styles.textBody}>
              <Text>
                C??c ki???n th???c t??i ???? t??ch lu??? ???????c trong qu?? tr??nh h???c t???i
                tr?????ng:
              </Text>
              <Text>
                T??i l?? m???t ng?????i kh??ng qu?? quan tr???ng v??? b???ng c???p, cho n??n ??i???u
                l??m t??i c???m th???y h???ng th?? nh???t khi h???c t???i tr?????ng l?? c??c ki???n
                th???c v??? Marketing m?? t??i h???c ???????c v?? c??c ki???n th???c n??y s??? gi??p
                g?? cho m??nh sau n??y khi ra tr?????ng, c??c ki???n th???c v??? Marketing m??
                t??i th??ch nh???t c?? th??? ???????c k??? ?????n nh??: ki???n th???c c???t l??i v???
                Marketing c??n b???n, c??ch t???i ??u SEO, ki???n th???c v??? t??ng ????? nh???n
                bi???t c???a th????ng hi???u ?????i v???i kh??ch h??ng, c??c ki???n th???c v??? l???p k???
                ho???ch Marketing v?? truy???n th??ng ??a k??nh. Theo t??i, ????y l?? nh???ng
                ki???n th???c r???t quan tr???ng c???n ph???i n???m v???ng khi l??m nh???ng c??ng
                vi???c li??n quan ?????n m???ng Marketing
              </Text>
            </Text>
            <ImageBackground
              style={{
                width: '100%',
                height: 450,
                backgroundColor: 'rgba(255, 255,255, 0.8)',
                resizeMode: 'stretch',
                borderRadius: 10,
                marginBottom: 16,
              }}
              imageStyle={{borderRadius: 10}}
              source={bgQualities}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  padding: 16,
                  paddingTop: 24,
                }}>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'white',
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    paddingTop: 20,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      position: 'absolute',
                      backgroundColor: 'black',
                      padding: 2,
                      borderRadius: 20,
                      top: -10,
                      left: 10,
                      paddingHorizontal: 16,
                      borderWidth: 0.5,
                      borderColor: 'white',
                    }}>
                    PH???M CH???T
                  </Text>
                  <Text style={{color: 'white', marginBottom: 14}}>
                    ????y l?? nh???ng ph???m ch???t ??? t??i m?? t??i ngh?? nh?? tuy???n d???ng s???
                    r???t th??ch khi l??m vi???c c??ng t??i
                  </Text>
                  <View
                    style={{
                      width: 100,
                      height: 20,
                      borderWidth: 0.5,
                      borderColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 16,
                      marginBottom: 7,
                    }}>
                    <Text style={{color: 'white'}}>Trung Th???c</Text>
                  </View>
                  <Text style={{color: 'white', marginBottom: 14}}>
                    Trong c??ng vi???c, t??i l?? 1 ng?????i r???t trung th???c v?? th???ng
                    th???n, v?? t??nh trung th???c c???a m??nh, khi n??i v??? 1 ng?????i ho???c 1
                    chuy???n n??o ????, t??i s??? ????a ra nh???n x??t 1 c??ch kh??ch quan nh???t
                  </Text>
                  <View
                    style={{
                      width: 100,
                      height: 20,
                      borderWidth: 0.5,
                      borderColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 16,
                      marginBottom: 7,
                    }}>
                    <Text style={{color: 'white'}}>Can ?????m </Text>
                  </View>
                  <Text style={{color: 'white', marginBottom: 14}}>
                    T??i l?? 1 ng?????i s???n s??ng ch???p nh???n r???i ro, t??i s???n s??ng ch???p
                    nh???n ??????ng ?????u th??? th??ch, s???n s??ng ?????m nh???n c??ng vi???c c?? vai
                    tr?? quan tr???ng hay c??ng vi???c ho??n to??n m???i toanh c?? ????? kh??ng
                    ch???c ch???n v?? kh??? n??ng th???t b???i r???t cao. V?? t??i c??ng l?? ng?????i
                    s???n s??ng n??i ra ch??nh ki???n c???a b???n th??n trong m???i ho??n c???nh
                  </Text>
                  <View
                    style={{
                      width: 100,
                      height: 20,
                      borderWidth: 0.5,
                      borderColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 16,
                      marginBottom: 7,
                    }}>
                    <Text style={{color: 'white'}}>D??? g???n</Text>
                  </View>
                  <Text style={{color: 'white', marginBottom: 14}}>
                    T??i l?? 1 ng?????i g???n g??i, th??n thi???n, d??? ch???u, v?? h???p t??c t???t
                    v???i m???i ng?????i. Trong c??ng vi???c, nh??? ho?? ?????ng, d??? g???n v???i m???i
                    ng?????i n??n t??i l??m vi???c nh??m r???t t???t
                  </Text>
                </View>
              </View>
            </ImageBackground>
            {/* Skill */}

            <ImageBackground
              style={{
                width: '100%',
                height: 400,
                backgroundColor: 'rgba(255, 255,255, 0.8)',
                resizeMode: 'stretch',
                borderRadius: 10,
                marginBottom: 18,
              }}
              imageStyle={{borderRadius: 10}}
              source={bgMain}>
              <View style={{paddingVertical: 16}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 12,
                  }}>
                  <TouchableOpacity
                    style={{
                      height: 24,
                      width: 100,
                      borderWidth: 0.5,
                      borderColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 16,
                      backgroundColor: 'rgba(255,255,255,0.5)',
                    }}>
                    <Text style={{color: 'white', fontWeight: '700'}}>
                      K??? n??ng m???m
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      height: 24,
                      width: 100,
                      borderWidth: 0.5,
                      borderColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 16,
                    }}>
                    <Text style={{color: 'white'}}>K??? n??ng c???ng</Text>
                  </TouchableOpacity>
                </View>

                <Animated.FlatList
                  data={DATA}
                  renderItem={({item, index}) => {
                    const inputRange = [
                      (index - 1) * 180,
                      index * 180,
                      (index + 1) * 180,
                    ];

                    const scale = scrollX.interpolate({
                      inputRange,
                      outputRange: [0.75, 1, 0.75],
                    });
                    return (
                      <Animated.View style={{transform: [{scale}]}}>
                        <Image
                          source={item}
                          style={{
                            width: 180,
                            resizeMode: 'contain',
                            height: 340,
                          }}
                        />
                      </Animated.View>
                    );
                  }}
                  keyExtractor={(item, i) => i.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{paddingLeft: 16}}
                  onScroll={Animated.event(
                    [
                      {
                        nativeEvent: {contentOffset: {x: scrollX}},
                      },
                    ],
                    {useNativeDriver: true},
                  )}
                  scrollEventThrottle={16}
                  bounces={true}
                  snapToInterval={180}
                  pagingEnabled={true}
                  snapToAlignment="start"
                  renderToHardwareTextureAndroid
                  decelerationRate={Platform.OS === 'ios' ? 0 : 0.9}
                />
              </View>
            </ImageBackground>

            {/* Skill */}
            {/* Other */}
            <TouchableOpacity
              style={{
                width: 150,
                height: 46,
                borderRadius: 100,
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                TH??NG TIN KH??C
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: 387,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'white',
                paddingVertical: 24,
              }}>
              <FlatList
                data={[
                  'S??? TH??CH',
                  'M???C TI??U NGH??? NGHI???P',
                  'GI???I TH?????NG',
                  'KINH NGHI???M L??M VI???C',
                  'HO???T ?????NG',
                  'CH???NG CH???',
                  'PORFOLIO',
                  'THAM CHI???U',
                ]}
                renderItem={({item, i}) => {
                  return (
                    <TouchableOpacity
                      style={{
                        width: 145,
                        height: 28,
                        borderWidth: 1,
                        borderColor: 'white',
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                      }}>
                      <Text style={{color: 'white'}}>{item}</Text>
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={(item, i) => i.toString()}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{height: 16}} />}
                columnWrapperStyle={{justifyContent: 'space-around'}}
              />
            </View>

            {/* Other */}
          </View>
        </ScrollView>
      </ContainerEditCV>
      {/* <View
        style={{
          position: 'absolute',
          right: -55,
          top: 180,
          bottom: 0,
          justifyContent: 'space-around',
          height: height * 0.42,
        }}>
        <Animated.View style={{transform: [{translateX: translateBtnInfo}]}}>
          <View style={{transform: [{rotate: '-90deg'}]}}>
            <Button
              title="TH??NG TIN"
              isDark={true}
              marginBottomText={8}
              fontSize={14}
              height={38}
              onPress={handleShowInfo}
            />
          </View>
        </Animated.View>
        <Animated.View style={{transform: [{translateX: translateBtnHobby}]}}>
          <View style={{transform: [{rotate: '-90deg'}]}}>
            <Button
              title="S??? TH??CH"
              isDark={true}
              marginBottomText={8}
              fontSize={14}
              height={38}
              onPress={handleShowHobby}
            />
          </View>
        </Animated.View>
      </View> */}
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'white',
    lineHeight: 22,
  },

  title: {
    color: 'white',
    fontSize: 18,
    marginBottom: 8,
    fontWeight: '700',
    marginLeft: 16,
  },

  textBody: {
    color: 'white',
    lineHeight: 20,
    paddingRight: 38,
    zIndex: -1,
    marginBottom: 20,
  },
});
