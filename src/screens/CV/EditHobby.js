import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {LayoutEdit, ContainerEditCV, LayoutInput} from '../../components';
import {SvgMusic} from '../../assets/svg';

export const EditHobby = ({navigation}) => {
  return (
    <ContainerEditCV navigation={navigation}>
      <LayoutEdit>
        <LayoutInput title={'Sở thích'} isShowSelection={true}>
          <View style={styles.container}>
            <FlatList
              columnWrapperStyle={{justifyContent: 'space-around'}}
              data={[1, 2, 32, 1, 2]}
              numColumns={2}
              renderItem={({item}) => {
                return (
                  <View style={styles.card}>
                    <SvgMusic />
                    <Text style={styles.text}>Nghe Nhạc</Text>
                  </View>
                );
              }}
              keyExtractor={(item, i) => i.toString()}
              ItemSeparatorComponent={() => <View style={{height: 16}} />}
            />
          </View>
        </LayoutInput>
      </LayoutEdit>
    </ContainerEditCV>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    color: 'white',
    marginLeft: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
