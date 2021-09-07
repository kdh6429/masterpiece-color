import React, { useEffect, useState } from 'react'

import { useRecoilValue } from 'recoil'
import { previewSetState } from '../recoil/Preview';
import { SVGImportorProps } from '../model/types';
import "./PreviewBody.scss"

import Materials from "../assets/template/Material/"
// import Slacks from "../assets/template/Slack/"

interface tempaltesTypes {
    [key: string]: Array<React.FC<SVGImportorProps>>
}

const PreviewBody = () => {
    const previewSet = useRecoilValue(previewSetState);
	const [curTemplates, setCurTempaltes] = useState(Array<React.FC<SVGImportorProps>>())
    const [templateId, setTmeplateId] = useState("Material UI")

    const templates: tempaltesTypes = {
        "Material UI" : Materials,
        // "Slack" : Slacks,
    }

	useEffect(() => {
        setCurTempaltes( templates[templateId]);
    }, [templateId]);

    const templateIdClick = (tempId: string) => {
        setTmeplateId(tempId);
    }
	return (
		<>
        <div className="template-wrapper">
            <div className="list">
                { Object.keys(templates).map( (tempId, index) => {
                    return (
                        <div className={"item " + (templateId===tempId? "selected":"")} key={index} onClick={() => templateIdClick(tempId)}>{tempId}</div>
                    );
                })}
                <div className="item update" key="upcomming">Other templates(will be updated)</div>
            </div>
            <div className="preview">
                { curTemplates && curTemplates.map( (Template, index)=> {
                    return (
                        <div className="screen" key={index}>
                            {previewSet && <Template colorSet={previewSet}/>}
                        </div>
                    );
                })}
            </div>
        </div>
		</>
	)
}
export default PreviewBody
	