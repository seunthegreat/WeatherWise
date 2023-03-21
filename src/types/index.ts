export interface ComponentProps {
   Map: {
    currentSelection: ConstantProps['City'];
  }
}

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