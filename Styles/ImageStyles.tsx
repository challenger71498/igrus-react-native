import {StyleSheet} from "react-native";
import {Constants} from "expo/build/globals.web";

const ImageStyles = StyleSheet.create({
    circleSmall: {
        borderRadius: 64,
        width: 32,
        height: 32,
    },
    circleMedium: {
        borderRadius: 128,
        width: 64,
        height: 64,
    },
    circleLarge: {
        borderRadius: 256,
        width: 128,
        height: 128,
    },
    squareBackGround: {
        alignSelf: 'stretch',
        width: Constants.width,
        height: 300,
    }
});

export default ImageStyles;
