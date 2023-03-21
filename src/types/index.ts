export interface ComponentProps {
  Sidebar: {
    screenSize: number;
    currentSelection: ConstantProps['City'] | null;
    onSelectCity: (item: ConstantProps['City'] | null) => void
  }
   Map: {
    currentSelection: ConstantProps['City'] | null;
  }
  Search: {
    onClickSearchResult: (item: ConstantProps['City'] | null) => void;
  }
  CityCard: {
    info: ConstantProps['City'],
    currentCity: ConstantProps['City'] | null,
    onSelectCity: (item: ConstantProps['City']) => void;
  }
};

export interface ConstantProps {
  City: {
    id: number;
    city: string;
    country: string;
    lngLat: [number, number];
  }
};

export interface Styling {
  Text: {
    normal: string;
    small: string;
    smallest: string;
    heading: string;
    subHeading: string;
    body: string;
  }
}