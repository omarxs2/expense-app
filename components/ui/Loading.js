
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { GlobalStyles } from '../../constants/style'

function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={GlobalStyles.colors.secondary800} />
        </View>
    );
}


export default Loading;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    }
});
