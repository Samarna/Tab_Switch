import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import InstagramScreen from './screens/InstagramScreen';
import FacebookScreen from './screens/FacebookScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer>

      </AppContainer>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Instagram : {screen:InstagramScreen},
  Facebook : {screen:FacebookScreen},
})
const AppContainer = createAppContainer(TabNavigator);
