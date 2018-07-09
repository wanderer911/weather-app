import React from 'react';
import Input from 'wix-style-react/Input';


const SearchListComponent = ({getInputProps, suggestions, getSuggestionItemProps, loading })=>(
    <div className="search-list">
        <Input  {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'search-list__input'})}/>
        <div className="search-list__container">
            {loading && <div>Loading...</div>}
            {
                suggestions.map(suggestion => {
                    const className = suggestion.active
                    ? 'search-list__item--active'
                    : 'search-list__item';
                    return (
                        <div
                        {...getSuggestionItemProps(suggestion, {className})}>
                            <span>{suggestion.description}</span>
                        </div>
                    );
                })
            }
        </div>
    </div>

);

export {SearchListComponent};


