// LocationStore.tsx
import { useState } from 'react';

let selectedStateGlobal = '';
let selectedCityGlobal = '';

export const useLocationStore = () => {
  const [selectedState, setSelectedState] = useState<string>(selectedStateGlobal);
  const [selectedCity, setSelectedCity] = useState<string>(selectedCityGlobal);

  const updateSelectedLocation = (state: string, city: string) => {
    selectedStateGlobal = state;
    selectedCityGlobal = city;
    setSelectedState(state);
    setSelectedCity(city);
  };

  return { selectedState, selectedCity, updateSelectedLocation };
};

// Exporting the selected state and city directly for use in other files
export const getSelectedState = () => selectedStateGlobal;
export const getSelectedCity = () => selectedCityGlobal;
