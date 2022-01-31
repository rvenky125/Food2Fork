import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppColors} from './theme/Theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from './util/Screens';
import {RecipeListScreen} from './screens/RecipeListScreen';
import {RecipeDetailScreen} from './screens/RecipeDetailScreen';

const App = () => {
    const Stack = createNativeStackNavigator();

    return (
        <View style={styles.surface}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={Screens.RecipeList}
                        component={RecipeListScreen}
                        options={{headerShown: false}}
                    />

                    <Stack.Screen
                        name={Screens.RecipeDetail}
                        component={RecipeDetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};

const styles = StyleSheet.create({
    surface: {
        backgroundColor: AppColors.background,
        flex: 1,
    },
});

export default App;
