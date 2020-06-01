import React from 'react';
import {StyleSheet} from 'react-native';
import FontSize from '../src/Constants/FontSize';
import Margin from "../src/Constants/Margin";

const ArticleStyles = StyleSheet.create({
        article: {
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            marginHorizontal: Margin.viewMargin,
            marginVertical: Margin.viewMargin,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
        },
        footer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'stretch',
        },
        footerIconView: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
        headerText: {
            marginHorizontal: Margin.contentMargin,
            alignSelf: 'center',
            fontSize: FontSize.h4,
        },
        contentText: {
            fontSize: FontSize.content,
            marginVertical: 20
        },
        footerText: {
            fontSize: FontSize.h5,
            fontWeight: 'bold',
            alignSelf: 'center',
        }
    }
);

export default ArticleStyles;
