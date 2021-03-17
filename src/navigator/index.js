import React from 'react';
// import {StyleSheet, View} from 'react-native';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  // BottomTabBar,
  //   BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  CV,
  CreateCV,
  Home,
  Job,
  ProfileCV,
  EditCV,
  EditGoal,
  EditInfo,
  EditIntro,
  GeneralCV,
  EditHobby,
  GeneralCV1,
  GeneralCV2,
} from '../screens';
import {SvgHome, SvgJob, SvgCV, SvgProfile} from '../assets/svg';

// const HomeStack = createStackNavigator();
// const JobStack = createStackNavigator();
const CVStack = createStackNavigator();
// const ProfileStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const checkTabButtomHide = (route) => {
  const nameRoute = getFocusedRouteNameFromRoute(route);
  if (nameRoute === 'GeneralCV') {
    return false;
  }
  if (nameRoute === 'EditCV') {
    return false;
  }
  if (nameRoute === 'EditInfo') {
    return false;
  }
  if (nameRoute === 'EditIntro') {
    return false;
  }
  if (nameRoute === 'EditHobby') {
    return false;
  }
  if (nameRoute === 'EditGoal') {
    return false;
  }
  if (nameRoute === 'CreateCV') {
    return false;
  }
  if (nameRoute === 'GeneralCV1') {
    return false;
  }
  if (nameRoute === 'GeneralCV2') {
    return false;
  }

  return true;
};

export const Navgators = () => {
  function CVStackScreen() {
    return (
      <CVStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'CV'}>
        <CVStack.Screen name="CV" component={CV} />
        <CVStack.Screen name="CreateCV" component={CreateCV} />
        <CVStack.Screen name="EditCV" component={EditCV} />
        <CVStack.Screen name="EditGoal" component={EditGoal} />
        <CVStack.Screen name="EditInfo" component={EditInfo} />
        <CVStack.Screen name="EditIntro" component={EditIntro} />
        <CVStack.Screen name="EditHobby" component={EditHobby} />
        <CVStack.Screen name="GeneralCV0" component={GeneralCV} />
        <CVStack.Screen name="GeneralCV1" component={GeneralCV1} />
        <CVStack.Screen name="GeneralCV2" component={GeneralCV2} />
      </CVStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          tabStyle: {
            backgroundColor: 'black',
          },
          style: {
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return <SvgHome fill={focused ? '#898989' : '#fff'} />;
            } else if (route.name === 'Job') {
              return <SvgJob fill={focused ? '#898989' : '#fff'} />;
            } else if (route.name === 'CVStack') {
              return <SvgCV fill={focused ? '#898989' : '#fff'} />;
            } else if (route.name === 'ProfileCV') {
              return <SvgProfile fill={focused ? '#898989' : '#fff'} />;
            }
          },
        })}

        // tabBar={(props) => (
        //   <View style={styles.navigatorContainer}>
        //     <BottomTabBar {...props} />
        //   </View>
        // )}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Job" component={Job} />
        {/* <Tab.Screen
            name="Add"
            component={DetailTask}
            options={{
              tabBarButton: (props) => (
                <TabBarAdvancedButton bgColor={'white'} {...props} />
              ),
            }}
          /> */}
        <Tab.Screen
          name="CVStack"
          component={CVStackScreen}
          options={({route}) => ({
            tabBarVisible: checkTabButtomHide(route),
          })}
        />
        <Tab.Screen name="ProfileCV" component={ProfileCV} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
// const styles = StyleSheet.create({
//   navigatorContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     borderWidth: 0,
//     // backgroundColor: 'red',
//   },
// });
