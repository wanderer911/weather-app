import React from 'react';


class ForecastPeriodComponent extends React.Component { 
	constructor(props){
        super(props);
		this.state ={period: props.period};
		this.localHandleChange = this.localHandleChange.bind(this);
    }

    localHandleChange(e){
        const {onPeriodChange} = this.props;
        const { name, value } = e.target;
        this.setState({ [name]: value });
        onPeriodChange(e);
    }

    render(){
        const {period} = this.state;
        if(period){
            return (
                <div>
                    <div className="form-control">
                        <label htmlFor="period">SHOW WEATHER FOR</label>
                        <input type="range" name="period"  min="1" max="7" value={period} onChange={this.localHandleChange}/>
                    </div>
                </div>
            )
        }
        return '';
    }
}

export {ForecastPeriodComponent};