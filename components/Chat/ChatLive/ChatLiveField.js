import {FlatList, StyleSheet, View} from "react-native";
import ChatLiveMyMessage from "./Message/ChatLiveMyMessage";
import ChatLiveOtherMessage from "./Message/ChatLiveOtherMessage";

export default function ChatLiveField({messageData, currentUserId}) {

    return (
        <View style={styles.ChatLiveField}>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 170}}
                style={styles.list}
                data={messageData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) =>
                    item.userId === currentUserId ? (
                        <ChatLiveMyMessage data={item}/>
                    ) : (
                        <ChatLiveOtherMessage data={item}/>
                    )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ChatLiveField: {
        backgroundColor: "#D4E0FF",
        padding: 10,
        paddingTop: 24,
        paddingBottom: 20,
        flexGrow: 1
    },
    list: {}
})
