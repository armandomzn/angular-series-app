export interface CastResponse {
  cast: Cast[];
  crew: any[];
  id:   number;
}

export interface Cast {
  character:    string;
  credit_id:    string;
  id:           number;
  name:         string;
  gender:       number;
  profile_path: string;
  order:        number;
}
