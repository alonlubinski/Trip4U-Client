import React from 'react';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

const LocationField = (props) => {


  return(
      <GeoapifyContext apiKey="14051dc528c747ae9dd758f3cd574cea">
        <GeoapifyGeocoderAutocomplete
          placeholder={props.placeholder}
          type="city"
          limit='3'
          placeSelect={props.placeSelect}        
        />

      </GeoapifyContext>
  )
}

export default LocationField;