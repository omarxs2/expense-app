import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function AllExpenses(props) {
  return (
    <View style={styles.container}>
      <Text>All Expenses</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default  AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
