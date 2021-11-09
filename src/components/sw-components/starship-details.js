import React, {useState} from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';
import {Redirect} from "react-router-dom";

const StarshipDetails = (props) => {
    const [back , setBack] = useState(false)

    if (back){
        return  <Redirect to="/starships/"/>
    }
  return (
    <ItemDetails {...props}>
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="manufacturer" label="Manufacturer" />
        <Record field="crew" label="Сrew" />
        <Record field="passengers" label="Passengers" />
        <Record field="cargoCapacity" label="Cargo capacity" />
        <Record field="consumables" label="Consumables" />
        <Record field="hyperdrive_rating" label="Hyperdrive rating" />
        <Record field="MGLT" label="MGLT" />
        <Record field="starship_class" label="Starship class" />
        <Record field="created" label="Created" />

        <button
            className='btn btn-primary'
            style={{width: '200px' , backgroundColor: 'rgb(57 57 57)', marginTop:'20px' , color:'white'}}
            onClick={() => setBack(true)}>Back to starships</button>
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
