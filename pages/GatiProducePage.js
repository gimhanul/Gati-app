import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput } from "react-native";
import ArrowIcon from "../assets/arrow.png"
import CameraIcon from "../assets/camera.png"

export default function GatiProducePage({navigation}) {

    const BeforeScreen = (navigation) => {
        navigation.pop();
    }

    return (
        <View style={styles.GatiProduceContainer}>
            {/* Header 부분 */}
            <View style={styles.GatiProduceHeader}>
                <TouchableOpacity onPress={BeforeScreen}>
                    <Image
                        source={ArrowIcon}
                        style={styles.ArrowIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.GatiTitleText}>
                    공동체 생성
                </Text>
                <TouchableOpacity>
                    <Text style={styles.CompletionText}>
                        완료
                    </Text>
                </TouchableOpacity>
            </View>
            {/* 사진 */}
            <View style={styles.UploadImgContent}>
                <Image 
                    source={CameraIcon}
                    style={styles.CameraIcon}
                />
            </View>
            {/* 공동체 이름 */}
            <View style={styles.GatiNameInputFrame}>
                <Text style={styles.GatiInputTitle}>공동체 이름</Text>
                <TextInput
                    style={styles.GatiNameInput}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    GatiProduceContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    GatiProduceHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 60,
        width: 300
    },
    ArrowIcon: {
        width: 10,
        height: 20,
    },
    GatiTitleText: {
        fontSize: 19,
        fontWeight: "bold",
    },
    CompletionText: {
        fontSize: 15,
        color: "#0D76FF"
    },
    UploadImgContent: {
        width: 300,
        height: 130,
        borderRadius: 12,
        backgroundColor: "#F2F2F2",
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    CameraIcon: {
        width: 60,
        height: 60
    },
    GatiNameInputFrame: {
        borderBottomWidth: 2,
        borderColor: "#0D76FF",
        marginTop: 20
    },
    GatiNameInput: {
        width: 300,
        height: 25,
        fontSize: 18
    },
    GatiInputTitle: {
        fontSize: 18,
        color: "#999999",
        fontWeight: "bold"
    }
})