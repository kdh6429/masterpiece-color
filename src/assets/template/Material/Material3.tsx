import React from 'react'
import { previewSetType } from "../../../model/types"
import "../template.scss"

interface SVGImportorProps {
    colorSet: previewSetType;
}

const Material3: React.FunctionComponent<SVGImportorProps> = (props) => {
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
                <defs>
                    <clipPath id="myClip2">
                        <rect x="0" y="0" width="365" height="647"></rect>
                    </clipPath>
                </defs>
                    <g clipPath="url(#myClip2)"><rect x="0.6" y="88.9" className="void-0" width="363.6" height="557.6"></rect>
                    <rect x="0.6" y="0" fill={props.colorSet.mColor} width="363.6" height="88.9"></rect>
                    <text transform="matrix(1 0 0 1 38.2239 44.6331)" className="title" fill={props.colorSet.mTextColor}>Text</text>
                    <rect x="42.4" y="65.2" className="void-1" width="280" height="350"></rect>
                    <rect x="42.4" y="454.8" className="void-1" width="280" height="190.5"></rect>
                <g>
              <circle fill={props.colorSet.sColorDarker} cx="322.7" cy="562" r="25.4"></circle>
              <line stroke={props.colorSet.sTextColor} className="fab-stroke pt-color-stroke st-color-stroke" x1="322.7" y1="549" x2="322.7" y2="574.2"></line>
              <line stroke={props.colorSet.sTextColor} className="fab-stroke pt-color-stroke st-color-stroke" x1="335.3" y1="561.6" x2="310.1" y2="561.6"></line>
            </g>
            <g>
                <path fill={props.colorSet.sColorDarker} className="s-color-dark" d="M163.5,224.7l26.3-45.5c-7.7-4.6-16.7-7.2-26.3-7.2c-28.6,0-51.7,23.2-51.7,51.7c0,28.6,23.2,51.7,51.7,51.7 c28.3,0,51.2-22.6,51.7-50.8H163.5z"></path>
                <path fill={props.colorSet.sColorDarker} className="s-color-dark" d="M215.2,223.7c0,0.3,0,0.6,0,1H267L215.2,135l-25.5,44.1C205,188.1,215.2,204.7,215.2,223.7z"></path>
                <path fill={props.colorSet.sColorLighter} className="s-color-light" d="M215.2,224.7c0-0.3,0-0.6,0-1c0-19-10.2-35.6-25.5-44.6l-26.3,45.5H215.2z"></path>
                </g>
                <g>
                    <g>
                        <path fill={props.colorSet.sColorDarker} className="s-color-dark" d="M163.5,614.2l26.3-45.5c-7.7-4.6-16.7-7.2-26.3-7.2c-28.6,0-51.7,23.2-51.7,51.7c0,28.6,23.2,51.7,51.7,51.7 c28.3,0,51.2-22.6,51.7-50.8H163.5z"></path>
                        <path fill={props.colorSet.sColorDarker} className="s-color-dark" d="M215.2,613.3c0,0.3,0,0.6,0,1H267l-51.7-89.6l-25.5,44.1C205,577.7,215.2,594.3,215.2,613.3z"></path>
                        <path fill={props.colorSet.sColorLighter} className="s-color-light" d="M215.2,614.2c0-0.3,0-0.6,0-1c0-19-10.2-35.6-25.5-44.6l-26.3,45.5H215.2z"></path>
                    </g>
                </g>
                <g>
                    <path fill={props.colorSet.sColor} className="s-color" d="M304.2,393.4c0,1-0.7,1.8-1.7,1.8h-84.7c-0.9,0-1.6-0.8-1.6-1.8V361c0-1,0.7-1.8,1.6-1.8h84.7 c0.9,0,1.7,0.8,1.7,1.8V393.4z"></path>
                <g>
                    <path fill="#767676" className="opacity-87 pt-color st-color" d="M250.22,373.21h-3.6v9.99h-1.92v-9.99h-3.6v-1.54h9.12V373.21z"></path>
                    <path fill="#767676" className="opacity-87 pt-color st-color" d="M258.95,378.01h-5.04v3.65h5.85v1.54h-7.78v-11.53h7.72v1.54h-5.8v3.26h5.04V378.01z"></path>
                    <path fill="#767676" className="opacity-87 pt-color st-color" d="M265.32,375.93l2.44-4.26h2.27l-3.54,5.72l3.68,5.81h-2.31l-2.51-4.33l-2.5,4.33h-2.27l3.62-5.81 l-3.54-5.72h2.26L265.32,375.93z"></path>
                    <path fill="#767676" className="opacity-87 pt-color st-color" d="M280.12,373.21h-3.6v9.99h-1.92v-9.99H271v-1.54h9.12V373.21z"></path>
                    </g>
                    </g>
                    </g>

            </svg>
        </>
	  );
}
export default Material3