import React from 'react';


class ForecastPeriodComponent extends React.Component { 
	constructor(props){
        super(props);
        this.state = {period: props.period};
    }


    render(){
        const { onPeriodChange, period} = this.props;
        return (
            <div>
                <div className="form-control">
                    <label htmlFor="period">SHOW WEATHER FOR</label>
                    <input type="range" name="period"  min="1" max="7" value={period} onChange={onPeriodChange}/>
                    <p>{period} days</p>
                </div>
            </div>
        )

    }
}

export {ForecastPeriodComponent};