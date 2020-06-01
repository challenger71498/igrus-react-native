import * as React from "react";
import {ImageBackground, Image, Text, TextInput, View} from "react-native";
import ViewStyles from "../../Styles/ViewStyles";
import IconSize from "../Constants/IconSize";
import {Ionicons} from '@expo/vector-icons';
import ArticleStyles from "../../Styles/ArticleStyles";
import WriteStyles from "../../Styles/WriteStyles";
import ImageStyles from "../../Styles/ImageStyles";

function WriteScreen({navigation}) {
    const [value, onChangeText] = React.useState('');

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Ionicons
                    name={'ios-send'}
                    onPress={() => navigation.goBack()}
                    size={IconSize.defaultSize}
                    style={{marginRight: 20}}
                />
            ),
        });
    });

    return (
        <View style={ViewStyles.viewDefault}>
            <View style={WriteStyles.header}>
                <Image
                    source={require("../../assets/person-image-test-2.jpeg")}
                    style={ImageStyles.circleMedium}
                />
                <Text style={ArticleStyles.headerText}>홍길동</Text>
            </View>
            <TextInput
                style={{
                    height: 300,
                    backgroundColor: '#e4e4e4',
                    borderRadius: 8,
                    textAlignVertical: 'top',
                    padding: 8,
                }}
                onChangeText={text => onChangeText(text)}
                value={value}
                multiline={true}
                scrollEnabled={true}
                placeholder={'Write anything on your mind!'}
                placeholderTextColor={'#aaa'}
            />
        </View>
    )
}

export default WriteScreen;
