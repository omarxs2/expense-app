
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { GlobalStyles } from '../../constants/style'

function CustomButton({ children, color, textColor, borderColor, onPress }) {

    return (
        <View style={[styles.rootContainer,
        {
            backgroundColor: color,
            borderColor: borderColor || color,
            borderWidth: 2

        }]}>
            <Pressable
                style={({ pressed }) => !pressed ? styles.buttonContainer : [styles.buttonContainer, styles.pressed]}
                onPress={onPress}>
                <View>
                    <Text style={[styles.buttonText, { color: textColor }]}>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>

    );
}


export default CustomButton;


const styles = StyleSheet.create({
    rootContainer: {
        borderRadius: 8,
        padding: 8,
        overflow: 'hidden',
        margin:4
    },
    buttonText: {
        fontWeight: 'bold',
        textAlign:'center'
    },
    buttonContainer: {
        borderRadius: 8,
        marginHorizontal: 10
    },
    pressed: {
        opacity: 0.25
    },
});
