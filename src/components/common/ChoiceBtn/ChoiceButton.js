import { Text,TouchableOpacity, StyleSheet } from "react-native";

export default function ChoiceButton({title, isChoiceBtn, setChoiceBtn}) {

    const GatiOnClick = () => {
        setChoiceBtn(true)
    }

    const PostOnClick = () => {
        setChoiceBtn(false)
    }

    return (
        <TouchableOpacity 
            style={isChoiceBtn ? styles.ChoiceBtn : styles.NotChoiceBtn}
            onPress={title == "게시물" ? PostOnClick : GatiOnClick}    
        >
            <Text style={{ color: "#fff", fontSize: 17, fontWeight: "bold" }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ChoiceBtn: {
        flexDirection: "row",
        alignItems: "center",
        width: 140,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#0D76FF",
        paddingLeft: 20
    },
    NotChoiceBtn: {
        flexDirection: "row",
        alignItems: "center",
        width: 140,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#999999",
        paddingLeft: 20
    }
})