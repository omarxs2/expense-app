import { StyleSheet, Text, View, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/style'



function ExpensesItem({ itemData }) {
    return (
        <Pressable
            android_ripple={{ color: '#817f7f' }}
            style={({ pressed }) => pressed && styles.pressed}
            onPress={() => { console.log('asd') }}>
            <View style={styles.container}>
                <View >
                    <Text>{itemData.item.description}</Text>
                    <Text style={styles.text} >{itemData.item.date.toLocaleDateString()}</Text>
                </View>
                <Text>${itemData.item.amount.toFixed(2)}</Text>
            </View>
        </Pressable>
    )
}

export default ExpensesItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.secondary100,
        margin: 4,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    text: {
        fontSize: 12
    },
    pressed: {
        opacity: 0.5
    },

});