import React from 'react';
import {ContainerEditCV, SelectionBtn, LayoutEdit} from '../../components';

export const EditCV = ({navigation}) => {
  return (
    <ContainerEditCV navigation={navigation}>
      <LayoutEdit>
        <SelectionBtn isHasCamera={true} title="ĐỔI ẢNH BACKGROUND" />
        <SelectionBtn
          title="GIỚI THIỆU BẢN THÂN"
          onPress={() => navigation.navigate('EditIntro')}
        />
        <SelectionBtn
          title="MỤC TIÊU NGHỀ NGHIỆP"
          onPress={() => navigation.navigate('EditGoal')}
        />
        <SelectionBtn
          title="THÔNG TIN CƠ BẢN"
          onPress={() => navigation.navigate('EditInfo')}
        />
        <SelectionBtn
          title="SỞ THÍCH BẢN THÂN"
          onPress={() => navigation.navigate('EditHobby')}
        />
      </LayoutEdit>
    </ContainerEditCV>
  );
};
