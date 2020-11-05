export interface SeriesResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Serie[];
}

export interface Serie {
  original_name: string;
  genre_ids: number[];
  name: string;
  popularity: number;
  origin_country: string[];
  vote_count: number;
  first_air_date: Date;
  backdrop_path: null | string;
  original_language: OriginalLanguage;
  id: number;
  vote_average: number;
  overview: string;
  poster_path: string;
}

export enum OriginalLanguage {
  De = 'de',
  En = 'en',
  Es = 'es',
  Ja = 'ja',
}
