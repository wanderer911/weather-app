import React from 'react';


class ScaleComponent extends React.Component { 
	constructor(props){
        super(props);
    }

    render(){
        const { scale,onScaleChange } = this.props;
        console.log(scale.scale);
        return (
            <div>
                <div className="form-control">
                <p>
                    <span className={scale.scale==='C'?'active-scale':''} onClick={onScaleChange}>C*</span> | 
                    <span className={scale.scale==='F'?'active-scale':''} onClick={onScaleChange}>F*</span>
                </p>
                </div>
            </div>
        )
    }
}

export {ScaleComponent};