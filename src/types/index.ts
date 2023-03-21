/**
 * Interface for component props used in the app. Properties include Navbar, Sidebar, Map, Search, and CityCard. 
 * Navbar.onSelectCity and Sidebar.onSelectCity are functions that accept arguments of type ConstantProps['City'] 
 * or null, which are called when a city is selected. Search.onClickSearchResult is a function that accepts an argument 
 * of type ConstantProps['City'] or null, which is called when a search result is clicked. CityCard.info is an object 
 * of type ConstantProps['City'] containing information about the city, and CityCard.onSelectCity is a function that 
 * accepts an argument of type ConstantProps['City'], which is called when a city is selected.
 */
export interface ComponentProps {
  Navbar: {
    onSelectCity: (item: ConstantProps['City'] | null) => void;
  }
  Sidebar: {
    screenSize: number;
    currentSelection: ConstantProps['City'] | null;
    onSelectCity: (item: ConstantProps['City'] | null) => void;
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