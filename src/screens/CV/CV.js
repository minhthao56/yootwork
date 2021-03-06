/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {useIsFocused} from '@react-navigation/core';
import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  Animated,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import {Calendar} from 'react-native-calendars';
import {SvgClock, SvgUser} from '../../assets/svg';
import LinearGradient from 'react-native-linear-gradient';

import {CardMyCV} from '../../components';
import {Button, ButtonNomal, Header} from '../../components/common';
import Avatar2 from '../../assets/images/avatar2.png';
import Avatar from '../../assets/images/avatar.png';
import BgModal from '../../assets/images/bgModal.png';
import CVImage from '../../assets/images/cv2.png';

import BgBlue from '../../assets/images/blur-blue.png';
import MeetingImage from '../../assets/images/meeting-image.png';

const {height, width} = Dimensions.get('window');
const ITEM_SIZE = 255;
export const CV = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [isShowModalDelete, setIsShowModalDelete] = useState();
  const isFocused = useIsFocused();
  const handleDeleteCV = i => {
    setIsShowModalDelete(true);
  };
  const handleDetailCV = index => {
    navigation.navigate(`GeneralCV${index}`);
  };
  return (
    <>
      {isFocused ? <StatusBar backgroundColor="#262626" /> : null}
      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: 24}}>
        <View style={{paddingHorizontal: 16, paddingTop: 16, marginBottom: 32}}>
          <Header
            onPress={() => navigation.navigate('CreateCV')}
            goBack={() => navigation.goBack()}
          />
        </View>
        <View style={{width: '100%', marginLeft: 32, marginBottom: 32}}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: '700',
              marginBottom: 8,
            }}>
            QU???N L?? CV
          </Text>
          <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
            DANH S??CH CV ???? T???O
          </Text>
        </View>
        <View style={{marginLeft: 8, marginBottom: 16}}>
          <Animated.FlatList
            data={[Avatar, Avatar2, Avatar]}
            keyExtractor={(item, i) => i.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              const inputRange = [
                (index - 1) * ITEM_SIZE,
                index * ITEM_SIZE,
                (index + 1) * ITEM_SIZE,
              ];

              const scale = scrollX.interpolate({
                inputRange,
                outputRange: [0.7, 1, 0.7],
              });
              return (
                <CardMyCV
                  index={index}
                  scale={scale}
                  handleDeleteCV={handleDeleteCV}
                  handleDetailCV={handleDetailCV}
                  source={item}
                />
              );
            }}
            ItemSeparatorComponent={() => <View style={{width: 8}} />}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {contentOffset: {x: scrollX}},
                },
              ],
              {useNativeDriver: true},
            )}
            bounces={true}
            snapToInterval={ITEM_SIZE}
            pagingEnabled={true}
            snapToAlignment="start"
            renderToHardwareTextureAndroid
            decelerationRate={Platform.OS === 'ios' ? 0 : 0.88}
          />
        </View>
        <Image
          source={BgBlue}
          style={{
            position: 'absolute',
            height: 450,
            width: '60%',
            zIndex: -1,
            right: 0,
            top: 100,
            resizeMode: 'contain',
          }}
          blurRadius={10}
        />
        <View style={{alignItems: 'flex-end', marginRight: 8}}>
          <ButtonNomal title="QU???N L?? N??NG CAO" width={150} />
        </View>
        <View style={{marginTop: 24, paddingHorizontal: 8}}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              textAlign: 'center',
              marginBottom: 6,
              fontWeight: '700',
            }}>
            L???CH H???N ???NG VI??N
          </Text>
          <Text style={{color: 'white', textAlign: 'center'}}>
            Nh???n v??o ng??y ???? ????nh d???u ????? xem chi ti???t
          </Text>
        </View>
        <View
          style={{
            marginTop: 24,
            marginHorizontal: 8,
            borderRadius: 20,
            overflow: 'hidden',
            marginBottom: 16,
          }}>
          <Calendar
            enableSwipeMonths={true}
            theme={{
              backgroundColor: 'transparent',
              calendarBackground: '#373639',
              textDayStyle: {color: 'white', fontSize: 11},
              monthTextColor: 'white',
              textMonthFontWeight: '700',
              textMonthFontSize: 18,
              arrowColor: 'white',
            }}
            style={{borderRadius: 20}}
            markingType="custom"
            markedDates={{
              '2021-03-16': {
                customStyles: {
                  container: {
                    backgroundColor: 'white',
                    height: 24,
                    width: 24,
                  },
                  text: {
                    color: 'black',
                    fontWeight: 'bold',
                  },
                },
              },
              '2021-03-22': {
                customStyles: {
                  container: {
                    backgroundColor: 'white',
                    height: 24,
                    width: 24,
                  },
                  text: {
                    color: 'black',
                    fontWeight: 'bold',
                  },
                },
              },
            }}
          />
        </View>
        <Text
          style={{
            paddingHorizontal: 16,
            color: 'white',
            fontSize: 20,
            fontWeight: '700',
          }}>
          Danh s??ch chi ti???t
        </Text>
        <Image
          source={MeetingImage}
          style={{resizeMode: 'contain', width: '100%', height: 350}}
        />
        {/* Card calender */}
        {[1, 2].map((item, i) => {
          return (
            <View key={i}>
              <Text
                style={{
                  paddingHorizontal: 16,
                  color: 'white',
                  fontSize: 20,
                  fontWeight: '700',
                  marginBottom: 16,
                  marginTop: 8,
                }}>
                Th??? T??, 17/3/2021
              </Text>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: 'white',
                  paddingBottom: 24,
                  marginHorizontal: 16,
                }}>
                <View
                  style={{
                    width: '90%',
                    backgroundColor: '#414141',
                    borderRadius: 20,
                    padding: 14,
                    paddingHorizontal: 24,
                  }}>
                  <Text
                    style={{
                      paddingHorizontal: 16,
                      color: 'white',
                      fontWeight: '700',
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      alignSelf: 'flex-start',
                      padding: 4,
                      borderRadius: 20,
                      paddingVertical: 6,
                      marginBottom: 8,
                    }}>
                    Ph???ng v???n l???p tr??nh
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 8,
                    }}>
                    <SvgClock />
                    <Text style={{color: 'white', marginLeft: 8}}>
                      8:00 - 10:00
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '700',
                      marginBottom: 6,
                    }}>
                    T??n ???ng vi??n:
                  </Text>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 8,
                      }}>
                      <Text style={{color: 'white'}}>Nguy???n V??n A</Text>
                      <LinearGradient
                        colors={['rgba(0,243,141,1)', 'rgba(0,158,255,1)']}
                        style={{padding: 4, borderRadius: 100}}>
                        <SvgUser />
                      </LinearGradient>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 8,
                      }}>
                      <Text style={{color: 'white'}}>Nguy???n V??n B</Text>
                      <LinearGradient
                        colors={['rgba(0,243,141,1)', 'rgba(0,158,255,1)']}
                        style={{padding: 4, borderRadius: 100}}>
                        <SvgUser />
                      </LinearGradient>
                    </View>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <ButtonNomal title="?????T L???I NH???C" height={28} />
                    </View>
                  </View>
                </View>
              </View>
              {/* Card calender */}
            </View>
          );
        })}
      </ScrollView>
      {/* Modal */}
      <Modal isVisible={isShowModalDelete}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              position: 'relative',
              width: width * 0.9,
              height: height * 0.4,
            }}>
            <Image
              source={BgModal}
              style={{
                position: 'absolute',
                resizeMode: 'stretch',
                height: '100%',
                width: '100%',
              }}
            />
            <View
              style={{
                padding: 16,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={CVImage}
                style={{
                  height: 200,
                  width: 150,
                  borderRadius: 20,
                  resizeMode: 'contain',
                }}
              />
              <Text style={{textAlign: 'center', color: 'white'}}>
                B???n c?? ch???c ch???n mu???n x??a CV Graphic Design kh??ng ?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-around',
                }}>
                <Button
                  title="H???y"
                  height={32}
                  width={80}
                  fontSize={15}
                  onPress={() => setIsShowModalDelete(false)}
                />
                <Button
                  title="X??a"
                  isActive={true}
                  height={32}
                  width={80}
                  fontSize={15}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Modal */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.85)',
    flex: 1,
  },
  linearGradient: {
    height: height * 0.5,
    width: width * 0.35,
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    // borderBottomLeftRadius: 30,
    zIndex: -1,
  },
  btn: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bg: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
