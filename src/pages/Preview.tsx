import React, { useEffect, useState } from 'react'
import { RouteProps } from "react-router-dom";
import queryString from "query-string"

import { useRecoilState } from 'recoil'
import { imageInfoState } from '../recoil/Preview';
import * as Util from "../hooks/Util"
import { previewSetType } from "../model/types"
import "./Preview.scss"
import PreivewBody from "./PreviewBody"
import PreviewSide from "./PreviewSide"

const Preview: React.FC<RouteProps> = (props) => {
    const [imageInfo, setImageInfo] = useRecoilState(imageInfoState);
	const [previewSets, setPreviewSets] = useState<Array<previewSetType>>([]);

	useEffect(() => {
		const { location } = props as any;
		if(location) {
			// m= s= mt= st= t=
			const params = queryString.parse(location.search);
			console.log( "params", params);
			if(!params.m) {
				window.location.href = "/";
			}
			const pSet: previewSetType = {
				mColor: params.m? '#' + params.m : "#000000",
				mColorDarker: params.md? '#' + params.md : "#000000",
				mColorLighter: params.ml? '#' + params.ml : "#000000",
				sColor: params.s? '#' + params.s : "#000000",
				sColorDarker: params.sd? '#' + params.sd : "#000000",
				sColorLighter: params.sl? '#' + params.sl : "#000000",
				mTextColor: params.mt? '#' + params.mt : "#000000",
				sTextColor: params.st? '#' + params.st : "#000000",
			}
			setImageInfo({
				...imageInfo,
				img: "",
				colors: Array<Array<string>>(),
			});
			setPreviewSets([pSet]);
		}
		else {
			const previewSets = Util.genPreviewsFromImageInfo(imageInfo);
			setPreviewSets(previewSets);
		}
    }, []);

	return (
		<>
		<div className="preview-wrapper">
			<div className="body-container">
				<PreivewBody/>
			</div>
			<div className="side-container">
				<PreviewSide previewSets={previewSets}/>
			</div>
		</div>
		</>
	)
}
export default Preview
	