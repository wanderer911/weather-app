import React from 'react';
import { connect } from 'react-redux';
import { scaleActions } from '../actions';
import { ScaleComponent } from '../components';

class ScaleContainer extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

	componentDidMount() {
        this.props.dispatch(scaleActions.get());
    }

    handleChange(e){
        const { textContent } = e.target;
        this.props.dispatch(scaleActions.set(textContent[0]));
    }
    render(){
        const {scale} = this.props.scale;
        return (
            <ScaleComponent onScaleChange={this.handleChange} scale={scale}/>
        );
    }
}


function mapStateToProps(state) {
	const { scale } = state;
	return {
		scale
	};
}

const connectedScaleContainer = connect(mapStateToProps)(ScaleContainer);
export {connectedScaleContainer as ScaleContainer};