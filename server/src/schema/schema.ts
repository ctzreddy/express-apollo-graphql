// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Character{
    id: Int
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: String
    image: String
    }
    
  type Query {
    characters: [Character]
    character(id: Int): Character
  }

`;

export { typeDefs };