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
                    <rect x="0.3" y="267.2" className="void-0" width="363.6" height="379.8"></rect>
                    <rect x="0.3" y="269.2" fill={props.colorSet.mColorLighter} width="363.6" height="63.3"></rect>
                    <rect x="0.3" y="24.8" fill={props.colorSet.mColor} width="363.6" height="244.4"></rect>
                    <rect x="0.3" y="0.5" fill={props.colorSet.mColorDarker}  width="363.6" height="88.9"></rect>
                    <text transform="matrix(1 0 0 1 32.0525 310.47)" className="content" fill={props.colorSet.mTextColor}>ITEM 1</text>
                    <text transform="matrix(1 0 0 1 156.3684 310.47)" className="content" fill={props.colorSet.mTextColor}>ITEM 2</text>
                    <text transform="matrix(1 0 0 1 277.5813 310.47)" className="content" fill={props.colorSet.mTextColor}>ITEM 3</text>
                    <rect x="0.3" y="328.5" fill={props.colorSet.sColor} width="121.2" height="4"></rect>
                    <g>
                        <circle fill={props.colorSet.sColor} cx="322.4" cy="562.5" r="25.4"></circle>
                        <line className="fab-stroke" stroke={props.colorSet.sTextColor} x1="322.4" y1="549.5" x2="322.4" y2="574.7"></line>
                        <line className="fab-stroke" stroke={props.colorSet.sTextColor} x1="335" y1="562.1" x2="309.8" y2="562.1"></line>
                    </g>
                    <text transform="matrix(1 0 0 1 32.0525 57.0959)" className="title"  fill={props.colorSet.mTextColor}>Text</text>
                </g>


             <g>
                 <rect x="0.5" y="0.5" fill={props.colorSet.mColor} className="p-color" width="363.6" height="646.5"></rect>
                 <rect x="0.5" y="558.1" fill={props.colorSet.mColorLighter} className="p-color-light" width="363.6" height="88.9"></rect>
                 <rect x="0.5" y="0.5" fill={props.colorSet.mColorDarker} className="p-color-dark" width="363.6" height="24.2"></rect>
                 <rect x="42.3" y="65.8" className="void-0" width="280" height="350"></rect>
                 <rect x="343.8" y="65.8" className="void-0" width="20" height="350"></rect>
                 <rect x="0.5" y="65.8" className="void-0" width="20" height="350"></rect>
                 <g>
                     <circle fill={props.colorSet.sColorDarker} className="s-color-dark" cx="303.3" cy="559.4" r="25.4"></circle>
                     <line stroke={props.colorSet.mTextColor} className="fab-stroke pt-color-stroke st-color-stroke" x1="303.3" y1="546.4" x2="303.3" y2="571.6"></line>
                     <line stroke={props.colorSet.mTextColor} className="fab-stroke pt-color-stroke st-color-stroke" x1="315.9" y1="559" x2="290.8" y2="559"></line>
                     </g>
                     
                     <path fill={props.colorSet.sColor} className="s-color" d="M125.3,267l57-98.7l57,98.7c25.3,43.9-6.3,98.7-57,98.7h0C131.6,365.6,100,310.8,125.3,267z"></path>
                     <rect x="42.3" y="65.8" fill={props.colorSet.sColorDarker} className="s-color-dark" width="280" height="50"></rect>
                     <rect x="343.5" y="65.8" fill={props.colorSet.sColorDarker}  className="s-color-dark" width="20.6" height="50"></rect>
                     <rect x="0.2" y="65.8" fill={props.colorSet.sColorDarker}  className="s-color-dark" width="20.6" height="50"></rect>
                     <text transform="matrix(1 0 0 1 62.2893 99.1602)" fill={props.colorSet.sTextColor} className="pt-color st-color title">Text</text>
                     <text transform="matrix(1 0 0 1 42.2729 455.2571)">
                        <tspan x="0" y="0" fill={props.colorSet.mTextColor} className="pt-color text">Lorem ipsum dolor sit amet, consectetur</tspan>
                        <tspan x="0" y="20" fill={props.colorSet.mTextColor} className="pt-color text">adipiscing elit. Donec viverra eget nulla</tspan>
                        <tspan x="0" y="40" fill={props.colorSet.mTextColor} className="pt-color text">vitae ornare.</tspan>
                     </text>
             </g>




            </svg>
		</>
	  );
}
export default Material2