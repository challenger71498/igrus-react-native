import React from 'react';
import {Alert, Button, Image, StyleSheet, Text, View} from 'react-native';
import ArticleStyles from "../../Styles/ArticleStyles";
import {Ionicons} from '@expo/vector-icons'
import ArticleData from "./ArticleData";
import IconSize from "../Constants/IconSize";
import ImageStyles from "../../Styles/ImageStyles";

function Article(data: ArticleData) {
    const [likes, setLikes] = React.useState(data.likes);
    const [liked, setLiked] = React.useState(false);
    const [color, setColor] = React.useState("#000");

    function SetData() {
        if (liked) {
            setLikes(likes - 1);
            setColor("#000");
        }
        else {
            setLikes(likes + 1);
            setColor("#ca3d3d");
        }
        setLiked(!liked);
    }

    return (
        <View style={ArticleStyles.article}>
            <View style={ArticleStyles.header}>
                <Image
                    source={require("../../assets/person-image-test-2.jpeg")}
                    style={ImageStyles.circleSmall}
                />
                <Text style={ArticleStyles.headerText}>{data.profileData.name}</Text>
            </View>
            <Text style={ArticleStyles.contentText}>{data.article}</Text>
            <View style={ArticleStyles.footer}>
                <View style={ArticleStyles.footerIconView}>
                    <Ionicons
                        name={"ios-heart"}
                        color={color}
                        onPress={(SetData)}
                        size={IconSize.defaultSize}
                        style={{marginRight: 8}}/>
                    <Text style={ArticleStyles.footerText} onPress={SetData}>{likes} like(s)</Text>
                </View>
                <View style={ArticleStyles.footerIconView}>
                    <Ionicons name={"ios-bookmark"} onPress={(() => Alert.alert("You liked!"))}
                              size={IconSize.defaultSize} style={{marginLeft: 8}}/>
                </View>
            </View>
        </View>
    )
}

export default Article;
