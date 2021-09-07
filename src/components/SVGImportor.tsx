import React from 'react'
import { useRecoilState } from 'recoil'
import { imageInfoState } from '../recoil/Preview';
import "./Header.scss"
import { previewSetType } from "../model/types"
interface SVGImportorProps {
    path: string;
    colorSet: previewSetType;
  }

const SVGImportor: React.FunctionComponent<SVGImportorProps> = (props) => {
	return (
		<>
            <img src={require(props.path)}/>
		</>
	  );
}
export default SVGImportor