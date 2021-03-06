/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {useIsFocused} from '@react-navigation/core';

import {HeaderGeneralCV2, NeumorphismBtn} from '../../components';
import {
  SvgCake,
  SvgEmail,
  SvgGender,
  SvgHeart,
  SvgHome,
  SvgPhone,
  SvgStart,
  SvgStudy,
} from '../../assets/svg';
import ImageAvatar from '../../assets/images/avatar3.png';
import BgStudy from '../../assets/images/cv2-1.png';
import BgKnowleage from '../../assets/images/cv2-2.png';
import IconKnowleage from '../../assets/icons/icon-know-white.png';
import BgQuality from '../../assets/images/cv2-3.png';
import BgSkill from '../../assets/images/cv2-4.png';
import BgMain from '../../assets/images/bg-cv2.png';

const {width} = Dimensions.get('screen');
const MainColor = '#204882';
const RedColor = 'rgba(232,42,0,1)';
// const greenColor = 'rgba(23,131,34,1)';

export const GeneralCV2 = ({navigation}) => {
  const isFocused = useIsFocused();
  return (
    <>
      {isFocused ? (
        <StatusBar backgroundColor={'#EAEAEA'} barStyle="dark-content" />
      ) : null}
      <ImageBackground
        style={{
          flex: 1,
          resizeMode: 'stretch',
        }}
        source={BgMain}>
        {/* ===========Header============ */}
        <View style={{paddingHorizontal: 12, paddingTop: 6, paddingBottom: 4}}>
          <HeaderGeneralCV2 navigation={navigation} />
        </View>
        {/* ===========Header============ */}
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            paddingHorizontal: 12,
            paddingBottom: 12,
            paddingTop: 12,
          }}>
          {/* ========avatar========== */}
          {/* <Neomorph
            darkShadowColor="#888" // <- set this
            lightShadowColor="white" // <- this
            style={{
              shadowOpacity: 0.4, // <- and this or yours opacity
              shadowRadius: 6,
              borderRadius: 100,
              backgroundColor: '#DDD',
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 24,
            }}> */}
          <Image
            source={ImageAvatar}
            style={{
              width: 200,
              height: 200,
              marginBottom: 16,
              borderRadius: 100,
              borderWidth: 2,
              borderColor: 'white',
            }}
          />
          {/* </Neomorph> */}
          {/* ========avatar========== */}
          <Text
            style={{
              color: MainColor,
              fontSize: 26,
              fontWeight: '700',
              marginBottom: 24,
            }}>
            NGUY???N TH??? KI???U TRANG
          </Text>
          <Neomorph
            darkShadowColor="#888" // <- set this
            lightShadowColor="white" // <- this
            inner
            style={{
              shadowOpacity: 0.5, // <- and this or yours opacity
              shadowRadius: 6,
              backgroundColor: '#B4EBE0',
              width: width * 0.9,
              height: 136,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
              borderRadius: 20,
            }}>
            <View
              style={{
                height: '100%',
                width: '100%',
                padding: 12,
                justifyContent: 'space-between',
                paddingVertical: 20,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 16,
                    }}>
                    <SvgCake fill={MainColor} height={18} width={18} />
                    <Text style={{color: MainColor, marginLeft: 6}}>
                      21 - 02 - 1996
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <SvgGender fill={MainColor} height={18} width={18} />
                    <Text style={{color: MainColor, marginLeft: 6}}>N???</Text>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 16,
                    }}>
                    <SvgPhone fill={MainColor} height={18} width={18} />
                    <Text style={{color: MainColor, marginLeft: 6}}>
                      076.123.2345
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <SvgEmail fill={MainColor} height={18} width={18} />
                    <Text style={{color: MainColor, marginLeft: 6}}>
                      nguyenthihong@gmail.com
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <SvgHome fill={MainColor} height={20} width={20} />
                <Text style={{color: MainColor, marginLeft: 6}}>
                  396 Cach Mang Thang 8, phuong 8, quan 3, TP.HCM
                </Text>
              </View>
            </View>
          </Neomorph>
          <View style={{width: '100%', marginBottom: 14}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ImageBackground
                source={BgStudy}
                style={{
                  width: 80,
                  height: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 2,
                }}>
                <SvgStudy fill="white" height={26} width={38} />
              </ImageBackground>
              <View
                style={{
                  borderColor: '#A91C79',
                  borderWidth: 1.5,
                  height: 44,
                  width: 140,
                  justifyContent: 'center',
                  borderRadius: 10,
                  left: -15,
                }}>
                <Text
                  style={{
                    color: '#A91C79',
                    fontWeight: '700',
                    fontSize: 18,
                    paddingLeft: 24,
                  }}>
                  H???C V???N
                </Text>
              </View>
            </View>
            <Text style={{color: MainColor, paddingLeft: 16, lineHeight: 21}}>
              <Text style={{color: MainColor, fontWeight: '700'}}>
                08/2018 ??? 01/2020
                {'\n'}
              </Text>
              {'\n'}T???t nghi???p c??? nh??n chuy??n ng??nh Marketing {'\n'}Tr?????ng ?????i
              h???c Kinh t??? TP.HCM {'\n'}Khoa: Qu???n tr??? kinh doanh {'\n'}??i???m
              trung b??nh: 7.0
            </Text>
          </View>
          <View style={{width: '100%'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ImageBackground
                source={BgKnowleage}
                style={{
                  width: 80,
                  height: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 2,
                }}>
                <Image source={IconKnowleage} style={{height: 30, width: 30}} />
              </ImageBackground>
              <View
                style={{
                  borderColor: '#026E68',
                  borderWidth: 1.5,
                  height: 44,
                  width: 140,
                  justifyContent: 'center',
                  borderRadius: 10,
                  left: -15,
                }}>
                <Text
                  style={{
                    color: '#026E68',
                    fontWeight: '700',
                    fontSize: 18,
                    paddingLeft: 24,
                  }}>
                  KI???N TH???C
                </Text>
              </View>
            </View>
            <Text style={{color: MainColor, paddingLeft: 16, marginBottom: 12}}>
              <Text style={{color: MainColor, fontWeight: '700'}}>
                C??c ki???n th???c t??i ???? t??ch lu??? ???????c trong qu?? tr??nh h???c t???i
                tr?????ng:{'\n'}
                {'\n'}
              </Text>
              <Text style={{lineHeight: 21}}>
                T??i l?? m???t ng?????i kh??ng qu?? quan tr???ng v??? b???ng c???p, cho n??n ??i???u
                l??m t??i c???m th???y h???ng th?? nh???t khi h???c t???i tr?????ng l?? c??c ki???n
                th???c v??? Marketing m?? t??i h???c ???????c v?? c??c ki???n th???c n??y s??? gi??p
                g?? cho m??nh sau n??y khi ra tr?????ng, c??c ki???n th???c v??? Marketing m??
                t??i th??ch nh???t {'\n'}
                {'\n'}
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
          </View>
          {/* ============Link tham khao=========== */}
          <View style={{width: '100%', marginBottom: 16}}>
            <Neomorph
              inner // <- enable shadow inside of neomorph
              darkShadowColor="#555" // <- set this
              lightShadowColor="white" // <- this
              style={{
                shadowRadius: 10,
                borderRadius: 20,
                backgroundColor: '#DDDDDD',
                width: 245,
                height: 52,
                justifyContent: 'center',
                alignItems: 'center',
                shadowOpacity: 0.5,
              }}>
              <View
                style={{
                  borderWidth: 1.5,
                  borderColor: '#E88B00',
                  height: '80%',
                  width: '90%',
                  borderRadius: 14,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 18, fontWeight: '700', color: '#E88B00'}}>
                  LI??N K???T THAM KH???O
                </Text>
              </View>
            </Neomorph>
          </View>
          {/* ============Link tham khao=========== */}
          <View style={{width: '100%'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ImageBackground
                source={BgQuality}
                style={{
                  width: 80,
                  height: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 2,
                }}>
                <SvgHeart fill="white" height={27} width={27} />
              </ImageBackground>
              <View
                style={{
                  borderColor: '#32026E',
                  borderWidth: 1.5,
                  height: 44,
                  width: 140,
                  justifyContent: 'center',
                  borderRadius: 10,
                  left: -15,
                }}>
                <Text
                  style={{
                    color: '#32026E',
                    fontWeight: '700',
                    fontSize: 18,
                    paddingLeft: 24,
                  }}>
                  H???C V???N
                </Text>
              </View>
            </View>

            <Text style={{color: MainColor, lineHeight: 21, marginBottom: 8}}>
              Trong c??ng vi???c, t??i l?? 1 ng?????i r???t trung th???c v?? th???ng th???n, v??
              t??nh trung th???c c???a m??nh, khi n??i v??? 1 ng?????i ho???c 1 chuy???n n??o ????,
              t??i s??? ????a ra nh???n x??t 1 c??ch kh??ch quan nh???t
            </Text>
            <View
              style={{
                width: 100,
                height: 22,
                borderWidth: 1,
                borderColor: MainColor,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 6,
              }}>
              <Text style={{color: MainColor}}>Trung Th???c</Text>
            </View>
            <Text style={{color: MainColor, lineHeight: 21, marginBottom: 16}}>
              Trong c??ng vi???c, t??i l?? 1 ng?????i r???t trung th???c v?? th???ng th???n, v??
              t??nh trung th???c c???a m??nh, khi n??i v??? 1 ng?????i ho???c 1 chuy???n n??o ????,
              t??i s??? ????a ra nh???n x??t 1 c??ch kh??ch quan nh???t
            </Text>
            <View
              style={{
                width: 100,
                height: 22,
                borderWidth: 1,
                borderColor: MainColor,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 6,
              }}>
              <Text style={{color: MainColor}}>Can ?????m </Text>
            </View>
            <Text style={{color: MainColor, lineHeight: 21, marginBottom: 16}}>
              T??i l?? 1 ng?????i s???n s??ng ch???p nh???n r???i ro, t??i s???n s??ng ch???p nh???n
              ??????ng ?????u th??? th??ch, s???n s??ng ?????m nh???n c??ng vi???c c?? vai tr?? quan
              tr???ng hay c??ng vi???c ho??n to??n m???i toanh c?? ????? kh??ng ch???c ch???n v??
              kh??? n??ng th???t b???i r???t cao. V?? t??i c??ng l?? ng?????i s???n s??ng n??i ra
              ch??nh ki???n c???a b???n th??n trong m???i ho??n c???nh
            </Text>
            <View
              style={{
                width: 100,
                height: 22,
                borderWidth: 1,
                borderColor: MainColor,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 6,
              }}>
              <Text style={{color: MainColor}}>D??? g???n</Text>
            </View>
            <Text style={{color: MainColor, lineHeight: 21, marginBottom: 24}}>
              Trong c??ng vi???c, t??i l?? 1 ng?????i r???t trung th???c v?? th???ng th???n, v??
              t??nh trung th???c c???a m??nh, khi n??i v??? 1 ng?????i ho???c 1 chuy???n n??o ????,
              t??i s??? ????a ra nh???n x??t 1 c??ch kh??ch quan nh???t
            </Text>
          </View>

          {/* ============Skill========= */}
          <View style={{width: '100%', marginBottom: 16}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <ImageBackground
                source={BgSkill}
                style={{
                  width: 80,
                  height: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 2,
                }}>
                <SvgHeart fill="white" height={27} width={27} />
              </ImageBackground>
              <View
                style={{
                  borderColor: '#C13A00',
                  borderWidth: 1.5,
                  height: 44,
                  width: 140,
                  justifyContent: 'center',
                  borderRadius: 10,
                  left: -15,
                }}>
                <Text
                  style={{
                    color: '#C13A00',
                    fontWeight: '700',
                    fontSize: 18,
                    paddingLeft: 24,
                  }}>
                  K??? N??NG
                </Text>
              </View>
            </View>
          </View>

          <Neomorph
            darkShadowColor="#888"
            lightShadowColor="white"
            inner
            style={{
              shadowOpacity: 0.4,
              shadowRadius: 6,
              borderRadius: 20,
              backgroundColor: '#B4EBE0',
              width: width * 0.9,
              height: width * 0.9,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
            }}>
            <View
              style={{
                width: '90%',
                height: '90%',
                borderWidth: 1.5,
                borderRadius: 20,
                borderColor: 'rgba(0,51,124,1)',
              }}>
              {/* Header Skill */}
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  position: 'absolute',
                  top: -13,
                  paddingHorizontal: 16,
                }}>
                <TouchableOpacity
                  style={{
                    height: 24,
                    width: 100,
                    // borderRadius: 20,
                    // borderWidth: 1,
                    // borderColor: MainColor,
                  }}>
                  <Neomorph
                    inner // <- enable shadow inside of neomorph
                    darkShadowColor="#555" // <- set this
                    lightShadowColor="white" // <- this
                    style={{
                      shadowRadius: 2,
                      borderRadius: 20,
                      backgroundColor: '#DDDDDD',
                      width: 100,
                      height: 24,
                      justifyContent: 'center',
                      alignItems: 'center',
                      shadowOpacity: 0.5,
                    }}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      top: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: MainColor,
                      }}>
                      K??? n??ng m???m
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 24,
                    width: 100,
                    borderRadius: 20,
                    // borderWidth: 1.5,
                    // borderColor: MainColor,
                    // backgroundColor: '#DDD',
                  }}>
                  <Neomorph
                    darkShadowColor="#555" // <- set this
                    lightShadowColor="white" // <- this
                    style={{
                      shadowRadius: 2,
                      borderRadius: 20,
                      backgroundColor: '#EDE7B3',
                      width: 100,
                      height: 24,
                      justifyContent: 'center',
                      alignItems: 'center',
                      shadowOpacity: 0.5,
                    }}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      top: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: MainColor,
                      }}>
                      K??? n??ng c???ng
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* Header Skill */}
              {/* Body skill */}
              <View style={{padding: 16, paddingTop: 18}}>
                <View style={{marginBottom: 16}}>
                  <Text
                    style={{
                      color: MainColor,
                      fontSize: 16,
                      fontWeight: '700',
                      marginBottom: 4,
                    }}>
                    K??? N??NG THUY???T TR??NH
                  </Text>
                  <Text style={{color: MainColor, marginBottom: 8}}>
                    Ho??n th??nh kh??a h???c K??? n??ng thuy???t tr??nh hi???u qu??? (YOOT APP)
                  </Text>
                  <NeumorphismBtn
                    height={30}
                    width={128}
                    backgroundColor={'#EDE7B3'}
                    borderColorInsilde={'rgba(255,255,255,0)'}>
                    <Text
                      style={{
                        color: RedColor,
                        fontSize: 16,
                        fontWeight: '700',
                      }}>
                      XEM CHI TI???T
                    </Text>
                  </NeumorphismBtn>
                </View>
                <View style={{marginBottom: 16}}>
                  <Text
                    style={{
                      color: MainColor,
                      fontSize: 16,
                      fontWeight: '700',
                      marginBottom: 4,
                    }}>
                    K??? N??NG L??M VI???C NH??M
                  </Text>
                  <Text style={{color: MainColor, marginBottom: 8}}>
                    Ho??n th??nh kh??a h???c k??? n??ng l??m vi???c nh??m (YOOT APP)
                  </Text>
                  <NeumorphismBtn
                    height={30}
                    width={128}
                    backgroundColor={'#EDE7B3'}
                    borderColorInsilde={'rgba(255,255,255,0)'}>
                    <Text
                      style={{
                        color: RedColor,
                        fontSize: 16,
                        fontWeight: '700',
                      }}>
                      XEM CHI TI???T
                    </Text>
                  </NeumorphismBtn>
                </View>
              </View>
              {/* Body skill */}
            </View>
          </Neomorph>
          {/*========== Skill ================*/}
          {/* Orther info */}
          {/* <NeumorphismBtn
            inner={true}
            height={42}
            width={140}
            borderWidthInsilde={0}
            borderColorInsilde={'rgba(255,255,255, 0)'}
            marginBottom={16}> */}
          <Text
            style={{
              color: MainColor,
              fontWeight: '700',
              fontSize: 16,
              marginBottom: 16,
            }}>
            TH??NG TIN KH??C
          </Text>
          {/* </NeumorphismBtn> */}
          {/* <View
            style={{
              height: width * 0.9,
              width: width * 0.9,
              borderWidth: 1,
              borderColor: MainColor,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
            }}> */}
          <View style={{padding: 8}}>
            <TouchableOpacity
              style={{
                width: 250,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                // borderWidth: 1.5,
                // borderColor: MainColor,
                marginBottom: 20,
              }}>
              <NeumorphismBtn
                height={50}
                width={250}
                backgroundColor="#B4E1EB"
                inner={true}
                borderColorInsilde={'rgba(255,255,255,0)'}>
                <Text
                  style={{color: MainColor, fontSize: 15, fontWeight: '700'}}>
                  S??? TH??CH
                </Text>
              </NeumorphismBtn>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 250,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                // borderWidth: 1.5,
                // borderColor: MainColor,
                marginBottom: 20,
              }}>
              <NeumorphismBtn
                height={50}
                width={250}
                backgroundColor="#EBDFB4"
                inner={true}
                borderColorInsilde={'rgba(255,255,255,0)'}>
                <Text
                  style={{color: '#795E00', fontSize: 15, fontWeight: '700'}}>
                  GI???I TH?????NG
                </Text>
              </NeumorphismBtn>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 250,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                // borderWidth: 1.5,
                // borderColor: MainColor,
                marginBottom: 20,
              }}>
              <NeumorphismBtn
                height={50}
                width={250}
                backgroundColor="#EAB4EB"
                inner={true}
                borderColorInsilde={'rgba(255,255,255,0)'}>
                <Text
                  style={{color: '#560058', fontSize: 15, fontWeight: '700'}}>
                  HO???T ?????NG
                </Text>
              </NeumorphismBtn>
            </TouchableOpacity>
          </View>
          {/* </View> */}
          {/* Orther info */}
          {/* Type CV */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingHorizontal: 8,
              marginBottom: 16,
            }}>
            <Text style={{color: MainColor, fontSize: 16, fontWeight: '700'}}>
              X???P H???NG CV
            </Text>
            <NeumorphismBtn
              inner={true}
              height={30}
              width={190}
              borderColorInsilde={'rgba(255,255,255,0)'}
              backgroundColor={'#B4EBE0'}>
              <View style={{flexDirection: 'row'}}>
                <SvgStart />
                <SvgStart />
                <SvgStart />
                <SvgStart />
                <SvgStart />
              </View>
            </NeumorphismBtn>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingHorizontal: 8,
            }}>
            <TouchableOpacity>
              <NeumorphismBtn
                height={36}
                width={120}
                borderColorInsilde={'rgba(255,255,255, 0)'}>
                <Text style={{color: MainColor, fontWeight: '700'}}>
                  LO???I CV
                </Text>
              </NeumorphismBtn>
            </TouchableOpacity>
            <TouchableOpacity>
              <NeumorphismBtn
                height={36}
                width={120}
                borderColorInsilde={'rgba(255,255,255, 0)'}>
                <Text style={{color: RedColor, fontWeight: '700'}}>
                  LI??N H???
                </Text>
              </NeumorphismBtn>
            </TouchableOpacity>
          </View>

          {/* Type CV */}
        </ScrollView>
      </ImageBackground>
    </>
  );
};
