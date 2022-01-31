import axios from 'axios';
import {Constants} from '../util/Constants';
import {Recipe, RecipeResponse} from './RecipeResponse';

const config = {
    headers: {
        Authorization: 'Token 9c8b06d329136da358c2d00e76946b0111ce2c48',
    },
};

export const getRecipes = (
    query: string,
    page: number,
): Promise<RecipeResponse> =>
    new Promise(async (resolve, reject) => {
        try {
            let response = await axios.get<RecipeResponse>(
                Constants.base_url +
                'search/' +
                '?page=' +
                page +
                '&' +
                'query=' +
                query,
                config,
            );
            resolve(response.data);
        } catch (e) {
            reject(e);
        }
    });

export const getRecipe = (id: number): Promise<Recipe> =>
    new Promise<Recipe>(async (resolve, reject) => {
        try {
            let response = await axios.get<Recipe>(
                Constants.base_url + 'get/' + '?id=' + id,
                config,
            );
            resolve(response.data);
        } catch (e) {
            reject(e);
        }
    });
