import { gql } from '@apollo/client';

const Query_Get_All_Characters = gql`
  query Characters {
  characters {
    id
    name
    origin
    species
    type
    gender
    image
  }
}`;


export default Query_Get_All_Characters;

