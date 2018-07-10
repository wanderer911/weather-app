import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {cityActions} from '../actions';
import { connect } from 'react-redux';
import {SearchListComponent} from '../components';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(address) {
    this.setState({ address });
  };

  handleSelect(address) {
    let result;
    geocodeByAddress(address)
      .then(results => {
        result=results;
        return getLatLng(results[0]);}
      )
      .then(latLng => {
  
        const {formatted_address,place_id} = result[0];
        console.log('Success', latLng,result[0]);
        cityActions.addCity({latLng,formatted_address,place_id});
    })
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {SearchListComponent}

      </PlacesAutocomplete>
    );
  }
}
function mapStateToProps(state) {
	const { city } = state;
	return {
		city
	};
}

const connectedSearchContainer = connect(mapStateToProps)(SearchContainer);
export {connectedSearchContainer as SearchContainer};
