import * as React from 'react';

// NAVIGATOR
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// SCREENS
import {LoginPage} from '../../pages/login/LoginPage';
import {HomePage} from '../../pages/home/HomePage';
import {RegisterPage} from '../../pages/register/RegisterPage';
import {ForgotPasswordPage} from '../../pages/forgot_password/ForgotPasswordPage';
import {ModifySearchPage} from '../../pages/modify_search/ModifySearchPage';
import {ActionsSearchPage} from '../../pages/actions_search/ActionsSearchPage';
import {SatisfyingCollectPage} from '../../pages/satisfying_collect/SatisfyingCollectPage';
import {ChartReportPage} from '../../pages/chart_report/ChartReportPage';
import {DrawerMenu} from '../../pages/home/components/DrawerMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const navigationOptions = () => ({
  headerTintColor: '#573FBA',
  headerStyle: {
    backgroundColor: '#2B1D62',
  },
  headerTitle: null,
  headerTitleStyle: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 22,
  },
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
    drawerContent={props => <DrawerMenu {...props} />}
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
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="chart-report"
          component={ChartReportPage}
          options={navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
