import 'react-native-gesture-handler';
import React from 'react';

// Navigation dependencies
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Characters from './app/views/Characters';
import CharactersDetail from './app/views/CharactersDetail';

import {Image} from 'react-native'

// store
import {store} from './store';

// provider
import {Provider} from 'react-redux';

// Creating Stack Navigation
const Stack = createStackNavigator();

const App = () => {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Characters"
          screenOptions={{
            headerRight: () => (
              <Image
              style={{width: 50, height: 40, resizeMode:'contain'}}
              source={require('./app/assets/icons8-rick-sanchez-48.png')}
              />
          ),
            headerStyle: {
              backgroundColor: '#FFF',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily: 'Nunito-Bold',
              color: '#000',
              fontSize: 28,
            },
            headerTintColor: '#000',
          }}>
          <Stack.Screen
            name="Characters"
            component={Characters}
            options={{
              title: 'Characters',
            }}
          />
          <Stack.Screen
            name="CharactersDetail"
            component={CharactersDetail}
            options={{
              title: 'Detail',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
