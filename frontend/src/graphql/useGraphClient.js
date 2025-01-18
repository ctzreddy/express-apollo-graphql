import { gql } from '@apollo/client';

const Get_All_Characters = gql`
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


export default Get_All_Characters;

