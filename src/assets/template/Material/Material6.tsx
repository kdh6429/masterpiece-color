import React from 'react'
import { previewSetType } from "../../../model/types"
import "../template.scss"

interface SVGImportorProps {
    colorSet: previewSetType;
}

const Material2: React.FunctionComponent<SVGImportorProps> = (props) => {
	return (
		<>
            <svg version="1.1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                x="0px" 
                y="0px" 
                // width="365px" 
                // height="650px" 
                viewBox="0 0 365 650" 
                xmlSpace="preserve"
            >
                
                <g>
                    <rect x="0.3" className="void-0" width="363.3" height="645.8"></rect>
                    <rect x="0.3" y="557" fill={props.colorSet.mColorLighter} className="p-color-light" width="363.3" height="88.8"></rect>
                    <rect x="0.3" fill={props.colorSet.mColor} className="p-color" width="363.3" height="99.9"></rect>
                    <rect x="40.7" y="62.6" className="void-1" width="282.6" height="454.1"></rect>
                    <g>
                        <circle fill={props.colorSet.sColorDarker} className="s-color-dark" cx="303.3" cy="559.4" r="25.4"></circle>
                        <line stroke={props.colorSet.sTextColor} className="fab-stroke pt-color-stroke st-color-stroke" x1="303.3" y1="546.4" x2="303.3" y2="571.6"></line>
                        <line stroke={props.colorSet.sTextColor} className="fab-stroke pt-color-stroke st-color-stroke" x1="315.9" y1="559" x2="290.8" y2="559"></line>
                    </g>
                    <text transform="matrix(1 0 0 1 40.6754 40.2647)" fill={props.colorSet.mTextColor} className="pt-color title">Text</text>
                    <line className="list-stroke" x1="40.7" y1="335" x2="323.2" y2="335"></line>
                    <line className="list-stroke" x1="40.7" y1="425.9" x2="323.2" y2="425.9"></line>
                    <rect x="40.7" y="153.4" fill={props.colorSet.sColor} className="s-color" width="282.6" height="90.8"></rect>
                    <rect x="50.8" y="86.8" className="list-stroke" width="10.1" height="10.1"></rect>
                    <g>
                        <text transform="matrix(1 0 0 1 73.0329 96.7985)" className="text text-color">One</text>
                    </g>
                    <rect x="50.8" y="177.6" fill={props.colorSet.sColorDarker} className="s-color-dark" width="10.1" height="10.1"></rect>
                    <g>
                        <text transform="matrix(1 0 0 1 73.0329 187.6207)" fill={props.colorSet.sTextColor} className="text pt-color st-color">Two</text>
                    </g>
                    <rect x="50.8" y="268.4" className="list-stroke" width="10.1" height="10.1"></rect>
                    <g>
                        <text transform="matrix(1 0 0 1 73.0329 278.443)" className="text text-color">Three</text>
                    </g>
                    <rect x="50.8" y="359.3" className="list-stroke" width="10.1" height="10.1"></rect>
                    <g>
                        <text transform="matrix(1 0 0 1 73.0329 369.2637)" className="text text-color">Four</text>
                    </g>
                    <rect x="50.8" y="450.1" className="list-stroke" width="10.1" height="10.1"></rect>
                    <g>
                        <text transform="matrix(1 0 0 1 73.0329 460.088)" className="text text-color">Five</text>
                    </g>
                </g>


            </svg>
		</>
	  );
}
export default Material2