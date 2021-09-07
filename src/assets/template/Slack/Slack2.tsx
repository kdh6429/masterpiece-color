import React from 'react'
import { previewSetType } from "../../../model/types"
import "../template.scss"

interface SVGImportorProps {
    colorSet: previewSetType;
}

const Slack2: React.FunctionComponent<SVGImportorProps> = (props) => {
    console.log( props.colorSet.mColor);
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
            </svg>
		</>
	  );
}
export default Slack2