import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './src/pages/SingIn';
import Home from './src/pages/Home';
import Register from './src/pages/Register';
import RiskPointList from './src/pages/RiskPointList';
import EditRiskPoint from './src/pages/EditRiskPoint';
import ViewRiskPoint from './src/pages/ViewRiskPoint';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{
            headerShown: false,
          }} 
        />


        
        <Stack.Screen 
          name="RiskPointList" 
          component={RiskPointList} 
          options={{
            headerShown: false,
          }} 
        />

        <Stack.Screen 
          name="EditRiskPoint" 
          component={EditRiskPoint} 
          options={{
            headerShown: false,
          }} 
        />

        <Stack.Screen 
          name="ViewRiskPoint" 
          component={ViewRiskPoint} 
          options={{
            headerShown: false,
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>   
  );
}

export default App;
