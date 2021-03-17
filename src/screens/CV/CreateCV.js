/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Animated,
  Dimensions,
  Platform,
} from 'react-native';
import {CardCV, BackDropCV} from '../../components';
import {Header} from '../../components/common';

const windowWidth = Dimensions.get('window').width;
const ITEM_SIZE = windowWidth * 0.73;
export const CreateCV = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleSelectCV = () => {
    navigation.navigate('GeneralCV');
  };

  return (
    <>
      <StatusBar backgroundColor="#333" barStyle="light-content" />
      <BackDropCV scrollX={scrollX} />
      <View style={styles.container}>
        <View style={{paddingHorizontal: 8, width: '100%', paddingTop: 8}}>
          <Header goBack={() => navigation.goBack()} />
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            flex: 1,
            alignItems: 'flex-end',
          }}>
          <Animated.FlatList
            data={[1, 2, 4, 2, 31, 2]}
            renderItem={({item, index}) => {
              const inputRange = [
                (index - 1) * ITEM_SIZE,
                index * ITEM_SIZE,
                (index + 1) * ITEM_SIZE,
              ];

              const translateY = scrollX.interpolate({
                inputRange,
                outputRange: [60, 0, 60],
              });

              return (
                <Animated.View
                  style={{
                    justifyContent: 'flex-end',
                    transform: [{translateY}],
                  }}>
                  <CardCV handleSelectCV={handleSelectCV} index={index} />
                </Animated.View>
              );
            }}
            horizontal={true}
            keyExtractor={(item, i) => i.toString()}
            ItemSeparatorComponent={() => <View style={{width: 16}} />}
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
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
});
