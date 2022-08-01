/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import App from './app/index.js';

AppRegistry.registerComponent(appName, () => App);
