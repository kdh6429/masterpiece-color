import React from 'react'

import { useRecoilValue } from 'recoil'
import { imageInfoState } from '../recoil/Preview';
import Main from './Main';
import Preview from './Preview';

function Landing() {
	const imageInfo = useRecoilValue(imageInfoState)
	
	return (
        <>
			{imageInfo.colors.length === 0 && <Main />}
			{imageInfo.colors.length > 0 && <Preview />}
		</>
    )
}

export default Landing
	