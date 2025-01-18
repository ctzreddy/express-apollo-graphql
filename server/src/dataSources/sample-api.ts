import { RESTDataSource } from '@apollo/datasource-rest';

export interface Character{
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  image: string;
}

class SampleAPI extends RESTDataSource {
  override baseURL = 'https://api.sampleapis.com/rickandmorty/';
  private token: string;

  constructor(options: any) {
    super(options); // this sends our server's `cache` through
    // this.contextValue = options?.context;
  }

  // async getCharacterData(id: string): Promise<Movie> {
  //   return this.get<Movie>(`movies/${encodeURIComponent(id)}`);
  // }

  async getCharacters(): Promise<Character[]> {
    const data = await this.get('characters', {
    });
    
    return data.results;
  }
}

export default SampleAPI;