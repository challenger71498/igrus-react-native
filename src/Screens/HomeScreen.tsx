import ArticleData from "../Article/ArticleData";
import React from "react";
import {Text, FlatList, Modal, RefreshControl, View} from "react-native";
import Article from "../Article/Article";
import {Button} from "react-native-elements";
import {Ionicons} from '@expo/vector-icons';
import IconSize from "../Constants/IconSize";
import ViewStyles from "../../Styles/ViewStyles";
import ArticleStyles from "../../Styles/ArticleStyles";
import TagData from "../Tag/TagData";

function wait(timeout: number) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

function HomeScreen({navigation}) {
    const ARTICLE_DATA = [ArticleData.GetDummyData(), ArticleData.GetDummyData(), ArticleData.GetDummyData(), ArticleData.GetDummyData()];
    //const TAG_DATA = [TagData.GetDummyData()];

    const [refreshing, setRefreshing] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing((false))); // TODO: Refreshes the news feed.
    }, [refreshing]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={ArticleStyles.footerIconView}>
                    {/*<Ionicons*/}
                        {/*name={'ios-pricetag'}*/}
                        {/*onPress={() => setModalVisible(!modalVisible)}*/}
                        {/*size={IconSize.defaultSize}*/}
                        {/*style={{marginRight: 20}}*/}
                    {/*/>*/}
                    <Ionicons
                        name={'md-create'}
                        onPress={() => navigation.navigate('Write')}
                        size={IconSize.defaultSize}
                        style={{marginRight: 20}}
                    />
                </View>
            ),
        });
    });

    return (
        <View style={ViewStyles.viewHome}>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
            >
                <View>
                    <Text>TODO: Make a search modal for tags.</Text>
                </View>
            </Modal>
            <FlatList
                data={ARTICLE_DATA}
                renderItem={(data) => <Article article={data.item.article} profileData={data.item.profileData}
                                               likes={data.item.likes} tags={data.item.tags}/>}
                contentContainerStyle={{alignItems: 'stretch', justifyContent: 'center'}}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
            />
        </View>
    )
}

export default HomeScreen;
