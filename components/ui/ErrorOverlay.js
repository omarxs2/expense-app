import { View, StyleSheet, Text } from 'react-native';
import { GlobalStyles } from '../../constants/style'
import CustomButton from './CustomButton';

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!!</Text>
      <Text style={styles.text}>{message}</Text>
      <CustomButton onPress={onConfirm} textColor={'#fff'} color={GlobalStyles.colors.secondary500} >Okay</CustomButton>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  text: {
    color: GlobalStyles.colors.secondary500,
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 12,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});