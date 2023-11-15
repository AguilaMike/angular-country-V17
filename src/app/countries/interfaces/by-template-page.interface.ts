export interface ByTemplatePageInterface {
  id: 'byCapital' | 'byCountry' | 'byRegion';
  title: string;
  isLoading: boolean;
  isRegion: boolean;
  searchBox?: {
    placeholder?: string;
  },
  table?: {
    columns?: string[];
    noDataCountryText?: string;
  }
}
