import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import globalStyles from './utils/globalStyles';

globalStyles();

AppRegistry.registerComponent(appName, () => App);
