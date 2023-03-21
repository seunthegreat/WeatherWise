import { ConstantProps } from "../types"

export const cities: ConstantProps['City'][] = [
  {
    id: 1,
    city: "Tokyo",
    country: "Japan",
    lngLat: [139.6917, 35.6895],
  },
  {
    id: 2,
    city: "New York",
    country: "USA",
    lngLat: [-74.0059, 40.7128],
  },
  {
    id: 3,
    city: "London",
    country: "UK",
    lngLat: [-0.1278, 51.5074],
  },
  {
    id: 4,
    city: "Paris",
    country: "France",
    lngLat: [2.3522, 48.8566],
  },
  {
    id: 5,
    city: "Los Angeles",
    country: "USA",
    lngLat: [-118.2437, 34.0522],
  },
  {
    id: 6,
    city: "Chicago",
    country: "USA",
    lngLat: [-87.6298, 41.8781],
  },
  {
    id: 7,
    city: "Moscow",
    country: "Russia",
    lngLat: [37.6173, 55.7558],
  },
  {
    id: 8,
    city: "Shanghai",
    country: "China",
    lngLat: [121.4737, 31.2304],
  },
  {
    id: 9,
    city: "Rio de Janeiro",
    country: "Brazil",
    lngLat: [-43.1729, -22.9068],
  },
  {
    id: 10,
    city: "Sydney",
    country: "Australia",
    lngLat: [151.2093, -33.8688],
  },
  {
    id: 11,
    city: "Dubai",
    country: "UAE",
    lngLat: [55.2708, 25.2048],
  },
  {
    id: 12,
    city: "Mumbai",
    country: "India",
    lngLat: [72.8777, 19.076],
  },
  {
    id: 13,
    city: "Berlin",
    country: "Germany",
    lngLat: [13.4049, 52.520],
  },
  {
    id: 14,
    city: "Toronto",
    country: "Canada",
    lngLat: [-79.3832, 43.6532],
  },
  {
    id: 15,
    city: "Istanbul",
    country: "Turkey",
    lngLat: [28.9784, 41.0082],
  },
  {
    id: 16,
    city: "Seoul",
    country: "South Korea",
    lngLat: [126.9778, 37.5665],
  },
  {
    id: 17,
    city: "São Paulo",
    country: "Brazil",
    lngLat: [-46.6333, -23.5505],
  },
  {
    id: 18,
    city: "Mexico City",
    country: "Mexico",
    lngLat: [-99.1332, 19.4326],
  },
  {
    id: 19,
    city: "Cairo",
    country: "Egypt",
    lngLat: [31.2357, 30.0444],
  },
  {
    id: 20,
    city: "Bangkok",
    country: "Thailand",
    lngLat: [31.2357, 30.0444],
  },
];

export const AppConstant = {
  popularCities: cities,
  mapBoxPublicKey: 'pk.eyJ1Ijoic2V1bnRoZWdyZWF0IiwiYSI6ImNsZmdvMXNybjI4MnAzcG11dGozMDAzc24ifQ.8vwfnWc5pIEnnsRuwr8g2w',
  openWeatherMapApiKey: "fcb11274062be329cd07dce2dec4f82c",
  openWeatherURL: 'https://api.openweathermap.org/data/2.5/forecast?'
}