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
                    <rect x="0.3" y="89.4" className="void-0" width="363.6" height="557.6"></rect>
                    <rect x="0.3" y="0.5" className="p-color" width="363.6" height="88.9"></rect>
                    <rect x="0.3" y="558.1" fill={props.colorSet.mColorLighter} width="363.6" height="88.9"></rect>
                    <rect x="0.3" y="0.5" fill={props.colorSet.mColorDarker} width="363.6" height="24.2"></rect>
                    <rect x="0.3" y="0.5" style={{opacity: ".5", fill: "#414142"}} className="void-1" width="363.6" height="646.5"></rect>
                    <rect x="0.3" y="0.5" className="void-2" width="300" height="646.5"></rect>
                    <rect x="0.3" y="0.5" fill={props.colorSet.sColor} width="300.2" height="300.2"></rect>
                    <g>
                        <path fill={props.colorSet.sColorLighter} className="s-color-light" d="M124.5,171l26.3-45.5c-7.7-4.6-16.7-7.2-26.3-7.2c-28.6,0-51.7,23.2-51.7,51.7c0,28.6,23.2,51.7,51.7,51.7 c28.3,0,51.2-22.6,51.7-50.8H124.5z"></path>
                        <path fill={props.colorSet.sColorLighter} className="s-color-light" d="M176.2,170.1c0,0.3,0,0.6,0,1H228l-51.7-89.6l-25.5,44.1C166,134.5,176.2,151.1,176.2,170.1z"></path>
                        <path fill={props.colorSet.sColorDarker} className="s-color-dark" d="M176.2,171c0-0.3,0-0.6,0-1c0-19-10.2-35.6-25.5-44.6L124.5,171H176.2z"></path>
                    </g>
                </g>
                <g>
                    <path fill={props.colorSet.sColorDarker} className="s-color-dark" d="M263.3,349.1h-20c-3.9,0-7-3.1-7-7l0,0c0-3.9,3.1-7,7-7h20c3.9,0,7,3.1,7,7l0,0 C270.3,345.9,267.1,349.1,263.3,349.1z"></path>
                    <circle fill={props.colorSet.sColorLighter} className="s-color-light" cx="263.3" cy="342.1" r="10"></circle>
                </g>




            </svg>
		</>
	  );
}
export default Material2