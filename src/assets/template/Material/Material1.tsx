import React from 'react'
import { SVGImportorProps } from "../../../model/types"
import "../template.scss"
const Material1: React.FC<SVGImportorProps> = (props) => {
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
                <rect x="0.5" y="267.2" className="void-0" fill={props.colorSet.mColor} width="363.6" height="379.8"></rect>
                <rect x="229.7" y="418.7" fill="#E1E2E1" width="118.2" height="2"></rect>
                <rect x="229.7" y="418.7" fill={props.colorSet.sColor} width="70.7" height="2"></rect>
                <path fill={props.colorSet.sColor} d="M300.5,415c-2.7,0-4.9,2.2-4.9,4.9c0,2.7,2.2,4.9,4.9,4.9c2.7,0,4.9-2.2,4.9-4.9 C305.5,417.2,303.3,415,300.5,415"></path>
                <rect x="0.5" y="89.4" fill="#e7e9e7" width="363.6" height="242.4"></rect>
                <circle fill={props.colorSet.sColor} cx="322.6" cy="331.5" r="25.4"></circle>
                <line className="fab-stroke" stroke={props.colorSet.sTextColor} x1="322.6" y1="318.5" x2="322.6" y2="343.7"></line>
                <line className="fab-stroke" stroke={props.colorSet.sTextColor} x1="335.2" y1="331.1" x2="310" y2="331.1"></line>
                <rect x="0.5" y="0.5" fill={props.colorSet.mColorDarker} width="363.6" height="24.2"></rect>
                <rect x="0.5" y="24.8" fill={props.colorSet.mColor} width="363.6" height="64.6"></rect>
                <text transform="matrix(1 0 0 1 32.217 65.1794)" className="title" fill={props.colorSet.mTextColor}>Text</text>
            </g>
            </svg>

		</>
	  );
}
export default Material1