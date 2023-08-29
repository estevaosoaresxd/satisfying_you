import * as React from 'react';

// NAVIGATOR
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// SCREENS
import {LoginPage} from '../pages/login/LoginPage';
import {HomePage} from '../pages/home/HomePage';
import {RegisterPage} from '../pages/register/RegisterPage';
import {ForgotPasswordPage} from '../pages/forgot_password/ForgotPasswordPage';
import {ModifySearchPage} from '../pages/modify_search/ModifySearchPage';
import {ActionsSearchPage} from '../pages/actions_search/ActionsSearchPage';
import {SatisfyingCollectPage} from '../pages/satisfying_collect/SatisfyingCollectPage';
import {CustomDrawerComp} from '../pages/home/components/Drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const navigationOptions = () => ({
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#2B1D62',
  },
  headerTitle: '',
});

const drawerOptions = () => ({
  headerTintColor: 'white',
  drawerActiveTintColor: '#550AB1',
  headerStyle: {
    backgroundColor: '#2B1D62',
  },
  drawerStyle: {
    backgroundColor: '#2B1F5C',
  },
  headerTitle: '',
});

const DrawerNavigation = () => (
  <Drawer.Navigator
    drawerContent={props => <CustomDrawerComp {...props} />}
    screenOptions={drawerOptions}>
    <Drawer.Screen name="home" component={HomePage} />
  </Drawer.Navigator>
);

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="drawer-home"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="register"
          component={RegisterPage}
          options={navigationOptions}
        />
        <Stack.Screen
          name="forgot-password"
          component={ForgotPasswordPage}
          options={navigationOptions}
        />

        <Stack.Screen
          name="modify-search"
          component={ModifySearchPage}
          options={navigationOptions}
        />
        <Stack.Screen
          name="actions-search"
          component={ActionsSearchPage}
          options={navigationOptions}
        />
        <Stack.Screen
          name="satisfying-collect"
          component={SatisfyingCollectPage}
          options={navigationOptions}
        />
        <Stack.Screen
          name="chart-report"
          component={SatisfyingCollectPage}
          options={navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
