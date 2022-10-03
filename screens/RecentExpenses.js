import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function RecentExpenses(props) {
  return (
    <View style={styles.container}>
      <Text>Recent Expenses</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default  RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
