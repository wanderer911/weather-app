import React from 'react';

const ScaleComponent = ({scale,onScaleChange}) =>(
    <div>
        <div className="form-control">
            <p>
                <span className={scale.scale==='C'?'active-scale':''} onClick={onScaleChange}>C*</span> | 
                <span className={scale.scale==='F'?'active-scale':''} onClick={onScaleChange}>F*</span>
            </p>
        </div>
    </div>
);
export {ScaleComponent};