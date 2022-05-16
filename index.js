import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import {
  globalStylesText,
  globalStylesTouchableOpacity,
} from './utils/globalStyles';

globalStylesText();
globalStylesTouchableOpacity();

AppRegistry.registerComponent(appName, () => App);
