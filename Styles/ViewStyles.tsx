import {StyleSheet} from "react-native";
import Margin from "../src/Constants/Margin";

const ViewStyles = StyleSheet.create({
    viewDefault: {
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginHorizontal: Margin.viewMargin,
    },
    viewHome: {
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    }
});

export default ViewStyles;
