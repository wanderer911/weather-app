import React from 'react';
import Slider from 'wix-style-react/Slider';
// import Button from 'wix-style-react/Button';

const ForecastPeriodComponent = ({onPeriodChange, period}) =>(
    <div>
        <div className="forecast-period">
            <label htmlFor="period">SHOW WEATHER FOR</label>
            <p className="forecast-period__period">{period} days</p>
            <Slider  value={[+period]} min={1} max={7}  onChange={onPeriodChange}/>

        </div>
    </div>
);

export {ForecastPeriodComponent};

