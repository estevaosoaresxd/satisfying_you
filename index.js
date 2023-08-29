import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// SCREENS
import {LoginPage} from './src/screens/login/LoginPage';
import {HomePage} from './src/screens/home/HomePage';
import App from './src/app';

AppRegistry.registerComponent(appName, () => App);
