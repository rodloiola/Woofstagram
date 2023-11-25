import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const SignInScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View>
      <Text>Sign In Screen</Text>
      <Button title="Go to SignUp" onPress={handlePress} />
    </View>
  );
};

const SignUpScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Main');
  };

  return (
    <View>
      <Text>Sign Up Screen</Text>
      <Button title="Go to Main" onPress={handlePress} />
    </View>
  );
};

const HomeScreen = () => (
  <View>
    <Text>Home Screen</Text>
  </View>
);

const FeedScreen = () => (
  <View>
    <Text>Feed Screen</Text>
  </View>
);

const CatalogScreen = () => (
  <View>
    <Text>Catalog Screen</Text>
  </View>
);

const AccountScreen = () => (
  <View>
    <Text>Account Screen</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SignIn" component={SignInScreen} />
        <Tab.Screen name="SignUp" component={SignUpScreen} />
        <Tab.Screen name="Main">
          {() => (
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Feed" component={FeedScreen} />
              <Tab.Screen name="Catalog" component={CatalogScreen} />
              <Tab.Screen name="Account" component={AccountScreen} />
            </Tab.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
