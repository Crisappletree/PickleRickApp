
import 'react-native-gesture-handler';
import React from 'react';

// Navigation dependencies
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Characters from './views/Characters'
import CharactersDetail from './views/CharactersDetail'

// store
import {store} from '../store'

// provider
import {Provider} from 'react-redux'


  // Creating Stack Navigation
  const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Characters"
        >
          <Stack.Screen 
            name="Characters"
            component={Characters}
            options={{
              title: "Characters"
            }}
          />
            <Stack.Screen 
              name="CharactersDetail"
              component={CharactersDetail}
              options={{
                title: "Characters Detail"
              }}
            />
            
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};



export default App;
