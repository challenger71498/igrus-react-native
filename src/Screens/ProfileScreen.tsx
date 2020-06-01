import * as React from 'react';
import {StyleSheet, Image, ImageBackground, Text, View} from "react-native";
import ImageStyles from "../../Styles/ImageStyles";
import ArticleStyles from "../../Styles/ArticleStyles";
import Margin from "../Constants/Margin";
import FontSize from "../Constants/FontSize";

function ProfileScreen() {
    return (
        <View>
            <View style={ImageStyles.squareBackGround}>
                <Image
                    source={require("../../assets/person-image-test-2.jpeg")}
                    resizeMode={'cover'}
                    style={ImageStyles.squareBackGround}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                zIndex: 1,
                marginTop: -72,
                marginLeft: 16,
            }}>
                <Image
                    source={require('../../assets/person-image-test.jpeg')}
                    resizeMode={'cover'}
                    style={ImageStyles.circleLarge}
                />
                <Text style={Styles.bottomFont}>홍길동</Text>
            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    bottomFont: {
        fontSize: FontSize.h2,
        fontWeight: 'bold',
        textAlignVertical: 'bottom',
        marginLeft: Margin.contentMargin,
        marginBottom: Margin.contentMargin,
    }
});

export default ProfileScreen;
