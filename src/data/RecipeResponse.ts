import 'reflect-metadata';

export interface RecipeResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Recipe[];
}

export interface Recipe {
    pk: number;
    title: string;
    publisher: string;
    featured_image: string;
    rating: number;
    source_url: string;
    description: string;
    cooking_instructions: any | null;
    ingredients: string[];
    date_added: string;
    date_updated: string;
    long_date_added: number;
    long_date_updated: number;
}
