import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Recipe} from '../data/RecipeResponse';
import {typography} from '../theme/Theme';
import {LikeHeart} from '../components/LikeHeart';

export const RecipeDetailScreen = ({navigation, route}) => {
    const [recipe, setRecipe] = useState<Recipe>();

    useEffect(() => {
        let re = route.params.recipe as Recipe;
        setRecipe(re);
    }, [route.params.recipe]);

    return (
        <ScrollView style={styles.body}>
            <View>
                <Image source={{uri: recipe?.featured_image}} style={styles.image}/>
                <LikeHeart likeCount={10} containerStyle={styles.likeContainer}/>
            </View>
            <Text style={typography.h6}>{recipe?.title}</Text>
            <Text style={typography.caption}>
                updated by {recipe?.publisher} on {recipe?.date_updated}
            </Text>
            <View style={{paddingVertical: 5}}>
                <Text style={[typography.subtitle1, {opacity: 0.7}]}>Ingredients:</Text>
                {recipe?.ingredients?.map(s => {
                    return <Text>{s}</Text>;
                })}
            </View>
            <View style={{paddingVertical: 5}}>
                <Text style={[typography.subtitle1, {opacity: 0.7}]}>Description:</Text>
                <Text>{recipe?.description}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    body: {
        marginHorizontal: 10,
        marginTop: 5,
    },
    image: {
        width: '100%',
        height: 230,
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        alignContent: 'center',
        paddingVertical: 5,
    },
    likeContainer: {
        position: 'absolute',
        right: 10,
        bottom: 20,
    },
});
