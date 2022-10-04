import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from './constants/style';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider } from 'react-redux';
import { store } from './store/store';

import AllExpenses from './screens/AllExpenses'
import RecentExpenses from './screens/RecentExpenses'
import ManageExpenses from './screens/ManageExpenses'
import IconButton from './components/ui/IconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverviewTabs = () => {

  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) =>
      ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary900 },
        headerTintColor: GlobalStyles.colors.secondary500,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary900 },
        tabBarActiveTintColor: GlobalStyles.colors.secondary500,
        tabBarInactiveTintColor: GlobalStyles.colors.primary100,
        headerRight: () => {
          return <IconButton onPress={() => navigation.navigate('ManageExpenses')}
            color={GlobalStyles.colors.secondary500}
            icon='add' />
        }
      })

      }>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name='time-outline' />
          ),
        }} />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name='calendar-outline' />
          ),
        }} />
    </BottomTabs.Navigator>
  )
};

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary900 },
              headerTintColor: GlobalStyles.colors.secondary500,
            }}
          >
            <Stack.Screen
              name='ExpensesOverview'
              component={ExpensesOverviewTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen name='ManageExpenses'
              component={ManageExpenses}
              options={{
                presentation: 'modal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      <StatusBar style='light' />

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
