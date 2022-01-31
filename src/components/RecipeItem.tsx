import React from 'react';
import {Recipe} from '../data/RecipeResponse';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {typography} from '../theme/Theme';
import {LikeHeart} from './LikeHeart';

export const RecipeItem = (recipe: Recipe, onClick: () => void) => {
    return (
        <View style={recipeStyleSheet.itemCard}>
            <TouchableHighlight
                onPress={() => {
                    onClick();
                }}
                underlayColor="white">
                <Image
                    source={{uri: recipe.featured_image}}
                    style={recipeStyleSheet.image}
                />
            </TouchableHighlight>
            <View style={recipeStyleSheet.titleContainer}>
                <Text style={[typography.h6, recipeStyleSheet.title]}>
                    {recipe.title}
                </Text>
                <LikeHeart likeCount={recipe.rating} containerStyle={{flex: 2}}/>
            </View>
        </View>
    );
};

const recipeStyleSheet = StyleSheet.create({
    image: {
        width: '100%',
        height: 260,
        borderRadius: 10,
    },
    itemCard: {
        backgroundColor: 'white',
        width: '100%',
        elevation: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    title: {
        padding: 8,
        flex: 8,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
