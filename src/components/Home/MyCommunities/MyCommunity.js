import { Image, StyleSheet, View } from "react-native";

export default function MyCommunity() {
    return (
        <View style={styles.MyCommunity}>
            <Image />
        </View>
    )
}

const styles = StyleSheet.create({
    MyCommunity: {
        width: 110,
        height: 110,
        backgroundColor: '#BEC9E6',
        borderRadius: 14,
        marginRight: 14
    }
})