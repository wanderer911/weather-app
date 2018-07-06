import React from 'react';

const ForecastPeriodComponent = ({onPeriodChange, period}) =>(
    <div>
        <div className="form-control">
            <label htmlFor="period">SHOW WEATHER FOR</label>
            <input type="range" name="period"  min="1" max="7" value={period} onChange={onPeriodChange}/>
            <p>{period} days</p>
        </div>
    </div>
);

export {ForecastPeriodComponent};