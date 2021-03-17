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
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import {Calendar} from 'react-native-calendars';

import {CardMyCV} from '../../components';
import {Button, Header} from '../../components/common';
import BgModal from '../../assets/images/bgModal.png';
import CVImage from '../../assets/images/cv2.png';
import Thum0 from '../../assets/thumnail/t-0.png';
import Thum1 from '../../assets/thumnail/t-1.png';
import Thum2 from '../../assets/thumnail/t-2.png';
import BgBlue from '../../assets/images/blur-blue.png';
import MeetingImage from '../../assets/images/meeting-image.png';
import {SvgClock} from '../../assets/svg';

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
      {isFocused ? <StatusBar backgroundColor="#222222" /> : null}
      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: 24}}>
        <View style={{paddingHorizontal: 16, paddingTop: 16, marginBottom: 32}}>
          <Header
            onPress={() => navigation.navigate('CreateCV')}
            goBack={() => navigation.goBack()}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: 32,
            marginBottom: 32,
          }}>
          <Button title={'CV'} isActive={true} />
          <Button title={'COVER LETTER'} />
        </View>
        <View style={{width: '100%', marginLeft: 32, marginBottom: 32}}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: '700',
              marginBottom: 8,
            }}>
            QUẢN LÝ CV
          </Text>
          <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
            DANH SÁCH CV ĐÃ TẠO
          </Text>
        </View>
        <View style={{marginLeft: 8}}>
          <Animated.FlatList
            data={[Thum0, Thum1, Thum2]}
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

        {/* <LinearGradient
          colors={['rgba(58,171,234,1)', 'rgba(72,77,233,1)']}
          style={styles.linearGradient}
        /> */}
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
        <View style={{marginTop: 24, paddingHorizontal: 8}}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              textAlign: 'center',
              marginBottom: 6,
              fontWeight: '700',
            }}>
            LỊCH HẸN ỨNG VIÊN
          </Text>
          <Text style={{color: 'white', textAlign: 'center'}}>
            Nhấn vào ngày đã đánh dấu để xem chi tiết
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
          Danh sách chi tiết
        </Text>
        <Image
          source={MeetingImage}
          style={{resizeMode: 'contain', width: '100%', height: 350}}
        />
        <Text
          style={{
            paddingHorizontal: 16,
            color: 'white',
            fontSize: 20,
            fontWeight: '700',
            marginBottom: 16,
          }}>
          Thứ Tư, 17/3/2021
        </Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              backgroundColor: '#414141',
              height: 300,
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
              Phỏng vấn lập trình
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 8,
              }}>
              <SvgClock />
              <Text style={{color: 'white', marginLeft: 8}}>8:00 - 10:00</Text>
            </View>
            <Text style={{color: 'white', fontWeight: '700', marginBottom: 6}}>
              Tên ứng viên:
            </Text>
            <View>
              <View>
                <Text style={{color: 'white'}}>Nguyễn Văn A</Text>
              </View>
            </View>
          </View>
        </View>
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
                Bạn có chắc chắn muốn xóa CV Graphic Design không ?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-around',
                }}>
                <Button
                  title="Hủy"
                  height={32}
                  width={80}
                  fontSize={15}
                  onPress={() => setIsShowModalDelete(false)}
                />
                <Button
                  title="Xóa"
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
