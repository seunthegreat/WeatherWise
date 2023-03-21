import React, { useState } from 'react';
import { SingleValue } from 'react-select';
import AsyncSelect from 'react-select/async';
import { AppConstant} from "../constants";
import { ConstantProps, ComponentProps } from '../types';

const { popularCities } = AppConstant;

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

const Search: React.FC<ComponentProps['Search']> = ({onClickSearchResult}) => {
  const [selectedCity, setSelectedCity] = useState<ConstantProps['City'] | null>(null);

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