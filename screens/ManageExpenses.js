import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function ManageExpenses(props) {
  return (
    <View style={styles.container}>
      <Text>Manage Expenses</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default  ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
