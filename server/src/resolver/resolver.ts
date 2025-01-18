import { ISampleDataSource } from '../dataSources/index';
import axios from 'axios';

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
        age: 20
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
        age: 30
    },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

const resolvers = {
    Query: {
        books: () => books,
        character: async (_, { id }, { dataSources }: { dataSources: ISampleDataSource }) => {
            // return dataSources.sampleAPI.getCharacters();
            const response = await axios.get('https://api.sampleapis.com/rickandmorty/characters');
            let character = '';
            if(response.data){
                character = response.data.find((character: any) => character.id === id);
            }
            return character;
        },
        characters: async (_, __, { dataSources }) => {
            const response = await axios.get('https://api.sampleapis.com/rickandmorty/characters');
            return response.data;
        },
    },
};

export { resolvers };