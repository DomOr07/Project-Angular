export interface RickAndMorty {
  info:    Info;
  results: Result[];
}

export interface Info {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export interface Result {
  id:       number;
  name:     string;
  status:   Status;
  species:  Species;
  type:     string;
  gender:   Gender;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface Location {
  name: string;
  url:  string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

export interface RootGetAllCharacters {
  info: Info;
  results: Result[];
}

export interface RootGetSingleCharacter extends Result {}

export interface RootGetMultipleCharacters extends Result {}

export interface RootFilterCharacter extends RootGetAllCharacters {}

export interface RootGetAllLocations {
  info: Info;
  results: LocationResult[];
}

export interface LocationResult {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface RootGetSingleLocation extends LocationResult {}

export interface RootGetMultipleLocations extends LocationResult {}

export interface RootGetAllEpisodes {
  info: Info;
  results: EpisodeResult[];
}

export interface EpisodeResult {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface RootGetSingleEpisode extends EpisodeResult {}

export interface RootGetAllMultipleEpisode extends EpisodeResult {}
