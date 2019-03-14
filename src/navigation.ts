import {createStackNavigator} from 'react-navigation';
import {ExampleScreen} from './screens/ExampleScreen';

const Navigation = createStackNavigator({
  ExampleScreen: {
    screen: ExampleScreen,
  },
});

export default Navigation;
