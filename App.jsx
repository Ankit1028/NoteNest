import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import Route from './src/navigation/Route';

const App = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default App;
