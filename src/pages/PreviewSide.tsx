import React, { useEffect, useState } from 'react'

import { useRecoilValue, useRecoilState } from 'recoil'
import { imageInfoState, previewSetState } from '../recoil/Preview';
import { previewSetType } from "../model/types"
import { getContrastRatio } from "../hooks/Util"
import "./PreviewSide.scss"
import ColorPicker from "../components/ColorPicker"
import LinkIcon from '@material-ui/icons/Link';

interface PreviewSideProps {
    previewSets: Array<previewSetType>;
}
const PreviewSide:React.FC<PreviewSideProps> = (props) => {
    const imageInfo = useRecoilValue(imageInfoState);
    const [previewSet, setPreviewSet] = useRecoilState(previewSetState);
	const [previewIndex, setPreviewIndex] = useState(0);
	const [shareClicked, setShareClicked] = useState(false);

	useEffect(() => {
		setPreviewIndex(0);
        setPreviewSet(props.previewSets[previewIndex]);
    }, [props.previewSets]);

    useEffect(() => {
        setPreviewSet(props.previewSets[previewIndex]);
    }, [previewIndex]);

	const handleChange = (color: any, colorKey: any) => {
		const newPreivewSet: previewSetType = {
			...previewSet,
			[colorKey]: color.hex,
		}
        setPreviewSet(newPreivewSet);
	};
    const goNextSet = () => {
        if (previewIndex+1 < props.previewSets.length) {
            setPreviewIndex(previewIndex + 1);
        }
    }
    const goPrevSet = () => {
        if (previewIndex-1 >= 0) {
            setPreviewIndex(previewIndex - 1);
        }
    }
    const getPercent = (color1: string, color2: string): number => {
        if(!color1 || !color2) return 0;
        return Math.floor(getContrastRatio(color1, color2)/21 * 100);
    }
    const getReadableText = (color1: string, color2: string): string => {
        const percent = getPercent(color1, color2)
        if (percent < 5) return "Bad";
        else if(percent < 20) return "Weak";
        else if(percent < 35) return "Good";
        else return "Very Good";
    }
    const clickShare = () => {
        let url = "";
        url += window.location.host + "/#/v?";
        url += "m=" + previewSet.mColor.slice(1) + "&";
        url += "md=" + previewSet.mColorDarker.slice(1) + "&";
        url += "ml=" + previewSet.mColorLighter.slice(1) + "&";
        url += "s=" + previewSet.sColor.slice(1) + "&";
        url += "sd=" + previewSet.sColorDarker.slice(1) + "&";
        url += "sl=" + previewSet.sColorLighter.slice(1) + "&";
        url += "mt=" + previewSet.mTextColor.slice(1) + "&";
        url += "st=" + previewSet.sTextColor.slice(1) + "&";
        
        var tempElem = document.createElement('textarea');
        tempElem.value = url;  
        document.body.appendChild(tempElem);
      
        tempElem.select();
        document.execCommand("copy");
        document.body.removeChild(tempElem);

        setShareClicked(true);
        window.setTimeout(() => {
            setShareClicked(false);
        }, 1500);
    }
	return (
		<>
            <div className="imageInfo-wrapper">
                <div className="image-wrapper">
                    {imageInfo.img && <img src={imageInfo.img} alt="preview" />}
                </div>
                <div className="previewIndexNav">
                    <span onClick={goPrevSet}> &lt; </span>
                    {previewIndex+1} / {props.previewSets?.length}
                    <span onClick={goNextSet}> &gt; </span>
                </div>

                {previewSet && <>
                    <div className="colorInfo-wrapper">
                        <div className="title">Primary</div>
                        <div className="color">
                            <div className="label">{ previewSet.mColor } </div>
                            <ColorPicker color={ previewSet.mColor } id="mColor" onChange={ handleChange }/>
                        </div>
                        <div className="color">
                            <div className="label">{ previewSet.mColorDarker } </div>
                            <ColorPicker color={ previewSet.mColorDarker } id="mColorDarker" onChange={ handleChange }/>
                        </div>
                        <div className="color">
                            <div className="label">{ previewSet.mColorLighter } </div>
                            <ColorPicker color={ previewSet.mColorLighter } id="mColorLighter" onChange={ handleChange }/>
                        </div>

                        <div className="title">Secondary</div>
                        <div className="color">
                            <div className="label">{ previewSet.sColor } </div>
                            <ColorPicker color={ previewSet.sColor } id="sColor" onChange={ handleChange }/>
                        </div>
                        <div className="color">
                            <div className="label">{ previewSet.sColorDarker } </div>
                            <ColorPicker color={ previewSet.sColorDarker } id="sColorDarker" onChange={ handleChange }/>
                        </div>
                        <div className="color">
                            <div className="label">{ previewSet.sColorLighter } </div>
                            <ColorPicker color={ previewSet.sColorLighter } id="sColorLighter" onChange={ handleChange }/>
                        </div>

                        <div className="title">Text on Primary</div>
                        <div className="color">
                            <div className="label">{ previewSet.mTextColor } </div>
                            <ColorPicker color={ previewSet.mTextColor } id="mTextColor" onChange={ handleChange }/>
                        </div>
                        <div className="title">Text on Secondary</div>
                        <div className="color">
                            <div className="label">{ previewSet.sTextColor } </div>
                            <ColorPicker color={ previewSet.sTextColor } id="sTextColor" onChange={ handleChange }/>
                        </div>
                    </div>
                    
                    <div className="contrast-wrapper">
                        <div className="title">Readability</div>
                        <div className="contrast">
                            <div className="circle" style={{background: previewSet.mColor}}></div>
                            <div className="circle" style={{background: previewSet.mTextColor}}></div>
                            <div className="label" data-label={getReadableText(previewSet.mColor, previewSet.mTextColor)}>{getReadableText(previewSet.mColor, previewSet.mTextColor)}</div>
                        </div>
                        <div className="contrast">
                            <div className="circle" style={{background: previewSet.mColorDarker}}></div>
                            <div className="circle" style={{background: previewSet.mTextColor}}></div>
                            <div className="label" data-label={getReadableText(previewSet.mColorDarker, previewSet.mTextColor)}>{getReadableText(previewSet.mColorDarker, previewSet.mTextColor)}</div>
                        </div>
                        <div className="contrast">
                            <div className="circle" style={{background: previewSet.mColorLighter}}></div>
                            <div className="circle" style={{background: previewSet.mTextColor}}></div>
                            <div className="label" data-label={getReadableText(previewSet.mColorLighter, previewSet.mTextColor)}>{getReadableText(previewSet.mColorLighter, previewSet.mTextColor)}</div>
                        </div>
                        <div className="contrast">
                            <div className="circle" style={{background: previewSet.sColor}}></div>
                            <div className="circle" style={{background: previewSet.sTextColor}}></div>
                            <div className="label" data-label={getReadableText(previewSet.sColor, previewSet.sTextColor)}>{getReadableText(previewSet.sColor, previewSet.sTextColor)}</div>
                        </div>
                        <div className="contrast">
                            <div className="circle" style={{background: previewSet.sColorDarker}}></div>
                            <div className="circle" style={{background: previewSet.sTextColor}}></div>
                            <div className="label" data-label={getReadableText(previewSet.sColorDarker, previewSet.sTextColor)}>{getReadableText(previewSet.sColorDarker, previewSet.sTextColor)}</div>
                        </div>
                        <div className="contrast">
                            <div className="circle" style={{background: previewSet.sColorLighter}}></div>
                            <div className="circle" style={{background: previewSet.sTextColor}}></div>
                            <div className="label" data-label={getReadableText(previewSet.sColorLighter, previewSet.sTextColor)}>{getReadableText(previewSet.sColorLighter, previewSet.sTextColor)}</div>
                        </div>
                    </div>

                    <div className="share-wrapper" onClick={clickShare}>
                        {!shareClicked && <><LinkIcon></LinkIcon><span>Share This Color</span></>}
                        {shareClicked && <><span className="active">URL Copied! </span></>}
                    </div>
                    </>
                }
            </div>
		</>
	)
}
export default PreviewSide
	