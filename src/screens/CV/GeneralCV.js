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
          <CardInfo title="THÔNG TIN CƠ BẢN" />
          <AvatarEditCV title={'Chuyên viên Marketing'} />
          <View style={{marginTop: 150}}>
            <Text style={styles.title}>HỌC VẤN</Text>
            <Text style={styles.textBody}>
              08/2018 – 01/2020 Tốt nghiệp cử nhân chuyên ngành Marketing Trường
              Đại học Kinh tế TP.HCM Khoa: Quản trị kinh doanh Điểm trung bình:
              7.0
            </Text>
            <Text style={styles.title}>KIẾN THỨC </Text>
            <Text style={styles.textBody}>
              <Text>
                Các kiến thức tôi đã tích luỹ được trong quá trình học tại
                trường:
              </Text>
              <Text>
                Tôi là một người không quá quan trọng về bằng cấp, cho nên điều
                làm tôi cảm thấy hứng thú nhất khi học tại trường là các kiến
                thức về Marketing mà tôi học được và các kiến thức này sẽ giúp
                gì cho mình sau này khi ra trường, các kiến thức về Marketing mà
                tôi thích nhất có thể được kể đến như: kiến thức cốt lõi về
                Marketing căn bản, cách tối ưu SEO, kiến thức về tăng độ nhận
                biết của thương hiệu đối với khách hàng, các kiến thức về lập kế
                hoạch Marketing và truyền thông đa kênh. Theo tôi, đây là những
                kiến thức rất quan trọng cần phải nắm vững khi làm những công
                việc liên quan đến mảng Marketing
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
                    PHẨM CHẤT
                  </Text>
                  <Text style={{color: 'white', marginBottom: 14}}>
                    Đây là những phẩm chất ở tôi mà tôi nghĩ nhà tuyển dụng sẽ
                    rất thích khi làm việc cùng tôi
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
                    <Text style={{color: 'white'}}>Trung Thực</Text>
                  </View>
                  <Text style={{color: 'white', marginBottom: 14}}>
                    Trong công việc, tôi là 1 người rất trung thực và thẳng
                    thắn, vì tính trung thực của mình, khi nói về 1 người hoặc 1
                    chuyện nào đó, tôi sẽ đưa ra nhận xét 1 cách khách quan nhất
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
                    <Text style={{color: 'white'}}>Can Đảm </Text>
                  </View>
                  <Text style={{color: 'white', marginBottom: 14}}>
                    Tôi là 1 người sẵn sàng chấp nhận rủi ro, tôi sẵn sàng chấp
                    nhận đương đầu thử thách, sẵn sàng đảm nhận công việc có vai
                    trò quan trọng hay công việc hoàn toàn mới toanh có độ không
                    chắc chắn và khả năng thất bại rất cao. Và tôi cũng là người
                    sẵn sàng nói ra chính kiến của bản thân trong mọi hoàn cảnh
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
                    <Text style={{color: 'white'}}>Dễ gần</Text>
                  </View>
                  <Text style={{color: 'white', marginBottom: 14}}>
                    Tôi là 1 người gần gũi, thân thiện, dễ chịu, và hợp tác tốt
                    với mọi người. Trong công việc, nhờ hoà đồng, dễ gần với mọi
                    người nên tôi làm việc nhóm rất tốt
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
                      Kỹ năng mềm
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
                    <Text style={{color: 'white'}}>Kỹ năng cứng</Text>
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
                THÔNG TIN KHÁC
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
                  'SỞ THÍCH',
                  'MỤC TIÊU NGHỀ NGHIỆP',
                  'GIẢI THƯỞNG',
                  'KINH NGHIỆM LÀM VIỆC',
                  'HOẠT ĐỘNG',
                  'CHỨNG CHỈ',
                  'PORFOLIO',
                  'THAM CHIẾU',
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
              title="THÔNG TIN"
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
              title="SỞ THÍCH"
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
