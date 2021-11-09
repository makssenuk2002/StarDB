import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props} >
        <Record field="gender" label="Gender:" />
        <Record field="gender" label="Gender :" />
        <Record field="birthYear" label="Birth year:" />
        <Record field="mass" label=" mass:" />

        <Record field="height" label=" height:" />
        <Record field="eyeColor" label="Eye Color:" />
        <Record field="hair_color" label="Hair color:" />

    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
