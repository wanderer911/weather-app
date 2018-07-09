import React from 'react';
import { Link } from 'react-router-dom';

export const CityListItemComponent = ({city,})=>(
    <p>
        <Link key={city.place_id} to={'/city/'+ city.place_id} >{city.formatted_address}</Link>
    </p>
)
