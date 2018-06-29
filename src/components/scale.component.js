import React from 'react';


class ScaleComponent extends React.Component { 
	constructor(props){
        super(props);
        this.state = {scale: props.scale};
		this.localHandleChange = this.localHandleChange.bind(this);
    }

    localHandleChange(e){
        console.log({e:e.target});
        const {onScaleChange} = this.props;
        const { textContent } = e.target;
        this.setState({ scale: textContent[0] });
        onScaleChange(e);
    }

    render(){
        const { scale } = this.props;
        return (
            <div>
            
                <div className="form-control">
                <p>Hello world</p>
                <p><span className={scale==='C'?'active-scale':''} onClick={this.localHandleChange}>C*</span>| 
                <span className={scale==='F'?'active-scale':''} onClick={this.localHandleChange}>F*</span> </p>
                </div>
            </div>
        )

    }
}

export {ScaleComponent};