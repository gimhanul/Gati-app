import {useCallback, useEffect, useMemo, useRef} from "react";
import {StyleSheet} from "react-native";
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetScrollView,
    BottomSheetView,
    useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import data from "../../../data/MyCommunityList.json";
import Community from "./Community";


export default function ChangeCommunityModal({isOpen, setIsOpen}) {
    const ref = useRef(null);
    const initialSnapPoints = useMemo(() => ["40%", "85%"], []);
    const {animatedHandleHeight, animatedSnapPoints, animatedContentHeight, handleContentLayout} =
        useBottomSheetDynamicSnapPoints(initialSnapPoints);
    const {bottom} = useSafeAreaInsets();

    useEffect(() => {
        if (isOpen) {
            ref.current?.present();
        } else {
            ref.current?.dismiss();
        }
    }, [isOpen]);

    const hideChangeCommunityModal = () => setIsOpen(false);

    const renderBackdrop = useCallback(
        (props) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                pressBehavior="none"
            />
        ),
        []
    );

    const confirm = () => {
        hideChangeCommunityModal();
    };

    const handleDismiss = useCallback(() => {
        hideChangeCommunityModal();
    }, []);

    return (
        <BottomSheetModal
            ref={ref}
            index={0}
            snapPoints={animatedSnapPoints}
            handleHeight={animatedHandleHeight}
            contentHeight={animatedContentHeight}
            handleComponent={null}
            enableOverDrag={false}
            onDismiss={handleDismiss}
            backdropComponent={renderBackdrop}
        >
            <BottomSheetScrollView
                style={[styles.container, {paddingBottom: bottom ? bottom + 15 : 30}]}
                contentContainerStyle={styles.scrollViewStyle}
                onLayout={handleContentLayout}
            >
                {data.myCommunityList.map(c => (
                    <Community
                        id={c.id}
                        name={c.name}
                        coverImage={c.coverImage}
                    />
                ))}
            </BottomSheetScrollView>
        </BottomSheetModal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
    },
});
