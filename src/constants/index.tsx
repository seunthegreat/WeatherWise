/**
 * This file contains a list of popular cities with their corresponding id, name, country and longitude-latitude values.
 * It also exports an object with some constant values, such as the list of popular cities, the Mapbox public key, 
 * the OpenWeatherMap API key, and the URL of the OpenWeatherMap API endpoint.
*/

import { ConstantProps } from "../types"

const cities: ConstantProps['City'][] = [
  {
    id: 1,
    city: "Tokyo",
    country: "Japan",
    lngLat: [139.6917, 35.6895],
    imgUrl: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dG9reW98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    city: "New York",
    country: "USA",
    lngLat: [-74.0059, 40.7128],
    imgUrl: "https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ldyUyMHlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    city: "London",
    country: "UK",
    lngLat: [-0.1278, 51.5074],
    imgUrl: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    city: "Paris",
    country: "France",
    lngLat: [2.3522, 48.8566],
    imgUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    city: "Los Angeles",
    country: "USA",
    lngLat: [-118.2437, 34.0522],
    imgUrl: "https://images.unsplash.com/photo-1542737579-ba0a385f3b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 6,
    city: "Chicago",
    country: "USA",
    lngLat: [-87.6298, 41.8781],
    imgUrl: "https://images.unsplash.com/photo-1549533948-77ab8a0d9878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNoaWNhZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 7,
    city: "Moscow",
    country: "Russia",
    lngLat: [37.6173, 55.7558],
    imgUrl: "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9zY293JTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 8,
    city: "Shanghai",
    country: "China",
    lngLat: [121.4737, 31.2304],
    imgUrl: "https://images.unsplash.com/photo-1616680687799-ea36d6fb2173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoYW5naGFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 9,
    city: "Rio de Janeiro",
    country: "Brazil",
    lngLat: [-43.1729, -22.9068],
    imgUrl: "https://images.unsplash.com/photo-1516834611397-8d633eaec5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJhemlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 10,
    city: "Sydney",
    country: "Australia",
    lngLat: [151.2093, -33.8688],
    imgUrl: "https://images.unsplash.com/photo-1530276371031-2511efff9d5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3lkbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 11,
    city: "Dubai",
    country: "UAE",
    lngLat: [55.2708, 25.2048],
    imgUrl: "https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 12,
    city: "Mumbai",
    country: "India",
    lngLat: [72.8777, 19.076],
    imgUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11bWJhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 13,
    city: "Berlin",
    country: "Germany",
    lngLat: [13.4049, 52.520],
    imgUrl: "https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8QmVybGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 14,
    city: "Toronto",
    country: "Canada",
    lngLat: [-79.3832, 43.6532],
    imgUrl: "https://images.unsplash.com/photo-1603466184840-715063d3e1e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRvcm9udG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 15,
    city: "Istanbul",
    country: "Turkey",
    lngLat: [28.9784, 41.0082],
    imgUrl: "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXN0YW5idWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 16,
    city: "Seoul",
    country: "South Korea",
    lngLat: [126.9778, 37.5665],
    imgUrl: "https://images.unsplash.com/photo-1546857908-9ee9d7f2fccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VvdWwlMjBrb3JlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 17,
    city: "São Paulo",
    country: "Brazil",
    lngLat: [-46.6333, -23.5505],
    imgUrl: "https://images.unsplash.com/photo-1620996148504-ca35ecfa6a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UyVDMyVBM28lMjBQYXVsb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 18,
    city: "Mexico City",
    country: "Mexico",
    lngLat: [-99.1332, 19.4326],
    imgUrl: "https://images.unsplash.com/photo-1564678164-f00ad53a38e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fE1leGljb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 19,
    city: "Cairo",
    country: "Egypt",
    lngLat: [31.2357, 30.0444],
    imgUrl: "https://images.unsplash.com/photo-1595979904086-471704dc0e81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fpcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 20,
    city: "Bangkok",
    country: "Thailand",
    lngLat: [31.2357, 30.0444],
    imgUrl: "https://images.unsplash.com/photo-1553831755-2a0a5370efe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbmdrb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
];

export const AppConstant = {
  popularCities: cities,
  mapBoxPublicKey: 'pk.eyJ1Ijoic2V1bnRoZWdyZWF0IiwiYSI6ImNsZmdvMXNybjI4MnAzcG11dGozMDAzc24ifQ.8vwfnWc5pIEnnsRuwr8g2w',
  openWeatherMapApiKey: "fcb11274062be329cd07dce2dec4f82c",
  openWeatherURL: 'https://api.openweathermap.org/data/2.5/forecast?'
}