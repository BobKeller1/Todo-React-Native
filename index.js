import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/app/App';
import {
  globalStylesText,
  globalStylesTouchableOpacity,
} from './src/utils/globalStyles';

globalStylesText();
globalStylesTouchableOpacity();

AppRegistry.registerComponent(appName, () => App);
