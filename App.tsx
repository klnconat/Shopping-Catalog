/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

// import HomePage from "./src/pages/HomePage";
// import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import StackNavigation from './src/navigation/StackNavigation';

const App = () => {
  return (
    <SafeAreaView style={styles.flex1}>
      <StackNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  }
});

export default App;
