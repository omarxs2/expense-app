
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { GlobalStyles } from '../../constants/style'

function Input({ label, textInputConfig, rowInputStyle }) {

    let inputStyles = [styles.input]

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.multiline)
    }

    return (
        <View style={[styles.rootContainer, rowInputStyle]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    );
}


export default Input;


const styles = StyleSheet.create({
    rootContainer: {
        margin: 4,
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary900,
        color: GlobalStyles.colors.secondary500,
        placeholderColor: '#fff',
        padding: 8,
        borderRadius: 6,
        fontSize: 16,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.secondary700,
        marginBottom: 4
    },
    multiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
});
