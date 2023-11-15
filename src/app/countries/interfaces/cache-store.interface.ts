import { Country } from './country.interface';
import { Region } from './region.type';

export interface CacheStore {
  [key: string]: {
    region: Region | null;
    term: string;
    countries: Country[];
  }
}
