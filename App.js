import 'react-native-gesture-handler';
import React from 'react';
import {Navgators} from './src/navigator';
import {MenuProvider} from 'react-native-popup-menu';

const App = () => {
  return (
    <MenuProvider>
      <Navgators />
    </MenuProvider>
  );
};

export default App;
