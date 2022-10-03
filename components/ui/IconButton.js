
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

function IconButton({ color, icon, onPress }) {
    return (
        <Pressable
            style={({ pressed }) => !pressed ? styles.buttonContainer : [styles.buttonContainer, styles.pressed]}
            onPress={onPress}>
            <Ionicons name={icon} color={color} size={32} />
        </Pressable >
    );
}


export default IconButton;


const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 8,
        marginHorizontal: 10
    },
    pressed: {
        opacity: 0.25
    },
});
