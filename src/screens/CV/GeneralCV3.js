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
            NGUYỄN THỊ KIỀU TRANG
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
                    <Text style={{color: MainColor, marginLeft: 6}}>Nữ</Text>
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
                  HỌC VẤN
                </Text>
              </View>
            </View>
            <Text style={{color: MainColor, paddingLeft: 16, lineHeight: 21}}>
              <Text style={{color: MainColor, fontWeight: '700'}}>
                08/2018 – 01/2020
                {'\n'}
              </Text>
              {'\n'}Tốt nghiệp cử nhân chuyên ngành Marketing {'\n'}Trường Đại
              học Kinh tế TP.HCM {'\n'}Khoa: Quản trị kinh doanh {'\n'}Điểm
              trung bình: 7.0
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
                  KIẾN THỨC
                </Text>
              </View>
            </View>
            <Text style={{color: MainColor, paddingLeft: 16, marginBottom: 12}}>
              <Text style={{color: MainColor, fontWeight: '700'}}>
                Các kiến thức tôi đã tích luỹ được trong quá trình học tại
                trường:{'\n'}
                {'\n'}
              </Text>
              <Text style={{lineHeight: 21}}>
                Tôi là một người không quá quan trọng về bằng cấp, cho nên điều
                làm tôi cảm thấy hứng thú nhất khi học tại trường là các kiến
                thức về Marketing mà tôi học được và các kiến thức này sẽ giúp
                gì cho mình sau này khi ra trường, các kiến thức về Marketing mà
                tôi thích nhất {'\n'}
                {'\n'}
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
                  LIÊN KẾT THAM KHẢO
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
                  HỌC VẤN
                </Text>
              </View>
            </View>

            <Text style={{color: MainColor, lineHeight: 21, marginBottom: 8}}>
              Trong công việc, tôi là 1 người rất trung thực và thẳng thắn, vì
              tính trung thực của mình, khi nói về 1 người hoặc 1 chuyện nào đó,
              tôi sẽ đưa ra nhận xét 1 cách khách quan nhất
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
              <Text style={{color: MainColor}}>Trung Thực</Text>
            </View>
            <Text style={{color: MainColor, lineHeight: 21, marginBottom: 16}}>
              Trong công việc, tôi là 1 người rất trung thực và thẳng thắn, vì
              tính trung thực của mình, khi nói về 1 người hoặc 1 chuyện nào đó,
              tôi sẽ đưa ra nhận xét 1 cách khách quan nhất
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
              <Text style={{color: MainColor}}>Can Đảm </Text>
            </View>
            <Text style={{color: MainColor, lineHeight: 21, marginBottom: 16}}>
              Tôi là 1 người sẵn sàng chấp nhận rủi ro, tôi sẵn sàng chấp nhận
              đương đầu thử thách, sẵn sàng đảm nhận công việc có vai trò quan
              trọng hay công việc hoàn toàn mới toanh có độ không chắc chắn và
              khả năng thất bại rất cao. Và tôi cũng là người sẵn sàng nói ra
              chính kiến của bản thân trong mọi hoàn cảnh
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
              <Text style={{color: MainColor}}>Dễ gần</Text>
            </View>
            <Text style={{color: MainColor, lineHeight: 21, marginBottom: 24}}>
              Trong công việc, tôi là 1 người rất trung thực và thẳng thắn, vì
              tính trung thực của mình, khi nói về 1 người hoặc 1 chuyện nào đó,
              tôi sẽ đưa ra nhận xét 1 cách khách quan nhất
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
                  KỸ NĂNG
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
                      Kỹ năng mềm
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
                      Kỹ năng cứng
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
                    KỸ NĂNG THUYẾT TRÌNH
                  </Text>
                  <Text style={{color: MainColor, marginBottom: 8}}>
                    Hoàn thành khóa học Kỹ năng thuyết trình hiệu quả (YOOT APP)
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
                      XEM CHI TIẾT
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
                    KỸ NĂNG LÀM VIỆC NHÓM
                  </Text>
                  <Text style={{color: MainColor, marginBottom: 8}}>
                    Hoàn thành khóa học kỹ năng làm việc nhóm (YOOT APP)
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
                      XEM CHI TIẾT
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
            THÔNG TIN KHÁC
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
                  SỞ THÍCH
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
                  GIẢI THƯỞNG
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
                  HOẠT ĐỘNG
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
              XẾP HẠNG CV
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
                  LOẠI CV
                </Text>
              </NeumorphismBtn>
            </TouchableOpacity>
            <TouchableOpacity>
              <NeumorphismBtn
                height={36}
                width={120}
                borderColorInsilde={'rgba(255,255,255, 0)'}>
                <Text style={{color: RedColor, fontWeight: '700'}}>
                  LIÊN HỆ
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
