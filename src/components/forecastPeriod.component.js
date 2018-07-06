import React from 'react';
import Slider from 'wix-style-react/Slider';
// import Button from 'wix-style-react/Button';

const ForecastPeriodComponent = ({onPeriodChange, period}) =>(
    <div>
        <div className="form-control">
            <label htmlFor="period">SHOW WEATHER FOR</label>
            <Slider  value={[+period]} min={1} max={7}  onChange={onPeriodChange}/>
            <p>{period} days</p>
        </div>
    </div>
);

export {ForecastPeriodComponent};

{/* 
<input type="range" name="period"  min="1" max="7" value={period} onChange={onPeriodChange}/>
<Slider  value={[3]} min={1} max={7} displayMarks={true} onChange={onPeriodChange}/> */}
//