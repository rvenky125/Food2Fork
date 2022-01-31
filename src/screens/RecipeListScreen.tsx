import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {RecipeItem} from '../components/RecipeItem';
import React, {useEffect, useState} from 'react';
import {AppColors} from '../theme/Theme';
import {Recipe} from '../data/RecipeResponse';
import {getRecipes} from '../data/RecipeApi';
import {Screens} from '../util/Screens';

export const RecipeListScreen = ({navigation}) => {
    const [recipes, setRecipes] = useState<Recipe[]>();
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const syncRecipesList = () => {
        setLoading(true);
        getRecipes('', currentPage)
            .then(recipeResponse => {
                setLoading(false);
                setRecipes(
                    currentPage > 1
                        ? recipes?.concat(recipeResponse.results)
                        : recipeResponse.results,
                );
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
            });
    };

    useEffect(() => {
        syncRecipesList();
    }, [currentPage]);

    function onClickItem(recipe: Recipe) {
        navigation.navigate(Screens.RecipeDetail, {recipe: recipe});
    }

    return (
        <View style={styles.body}>
            <FlatList
                data={recipes}
                renderItem={({item}) => RecipeItem(item, () => onClickItem(item))}
                onEndReachedThreshold={0.9}
                onEndReached={() => setCurrentPage(currentPage + 1)}
            />
            <ActivityIndicator
                animating={loading}
                size="large"
                style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    bottom: 0,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    surface: {
        backgroundColor: AppColors.background,
        flex: 1,
    },
    body: {
        marginHorizontal: 10,
    },
});
