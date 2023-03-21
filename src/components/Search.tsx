//-- Importing the necessary components, types and constants --//
import React, { useState } from 'react';
import { SingleValue } from 'react-select';
import AsyncSelect from 'react-select/async';
import { AppConstant} from "../constants";
import { ConstantProps, ComponentProps } from '../types';

//-- Destructure popularCities from AppConstant --//
const { popularCities } = AppConstant;

//-- Define the loadOptions function that will filter the popularCities based on the input value. --//
const loadOptions = async (inputValue: string) => {
  const filteredCities = popularCities.filter((city) => {
  const normalizedInputValue = inputValue.trim().toLowerCase();
    const normalizedCityName = city.city.trim().toLowerCase();
    const normalizedCountryName = city.country.trim().toLowerCase();
      return (
        normalizedCityName.includes(normalizedInputValue) ||
        normalizedCountryName.includes(normalizedInputValue)
      );
    });
    return filteredCities.map((city: ConstantProps['City']) => ({
      label: `${city.city}, ${city.country}`,
      value: city,
    }));
  };

//-- Define the Search component that renders an AsyncSelect component --//
const Search: React.FC<ComponentProps['Search']> = ({onClickSearchResult}) => {
  //-- Set up the state variable and its setter for the selected city --//
  const [selectedCity, setSelectedCity] = useState<ConstantProps['City'] | null>(null);

  //-- Define the handleCityChange function that will set the selected city state variable when the user selects an option. --//
  const handleCityChange = (newValue: SingleValue<{
    label: string;
    value: ConstantProps['City'];
  }> | null) => {
   
    setSelectedCity(newValue?.value ?? null);
    onClickSearchResult(newValue?.value ?? null);
  };
  
  return (
    <AsyncSelect
      loadOptions={loadOptions}
      onChange={handleCityChange}
      
      value={selectedCity ? { label: `${selectedCity.city}, ${selectedCity.country}`, value: selectedCity } : null}
      placeholder="Type to search for a city..."
      />
  )
}

export default Search