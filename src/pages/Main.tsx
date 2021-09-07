import React, { useState } from 'react'
import getColors from '../hooks/ImageProcessor'

import { useSetRecoilState } from 'recoil'
import { imageInfoState } from '../recoil/Preview';
import MPImage from '../components/MPImage'
import './Main.scss'

function Main() {
    const setimageInfo = useSetRecoilState(imageInfoState)
    const [isover, setOver] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const defaultDDMessage = ""
    const [message, setMessage] = useState(defaultDDMessage);

    const setTimerMessage = (message: string) => {
        setMessage(message);
        setIsLoading(false);
        setTimeout(() => {
            setMessage("");
        }, 3000)
    }
    const onFileSelected = ( event: React.ChangeEvent<HTMLInputElement>) => {
        /*Selected files data can be collected here.*/
        setIsLoading(true);
        if(event.target.files && event.target.files.length > 0) {
			const file = event.target.files[0];
			setPrimaryColors(file);
		}
        else {
            setTimerMessage("Sorry, Unable to get color from your image :(");
        }
      }

	const setPrimaryColors = (file: File | Blob) => {
		getColors(file).then( data => {
            setIsLoading(false);
            const [colors, img] = data
			setimageInfo({
                colors: colors,
                img: img
            });
		}).catch(e => {
			console.error(e);
            setTimerMessage("Sorry, Unable to get color from your image :(");
		})
	}
	const onDragOver = (event: React.DragEvent) => {
        event.preventDefault();
        setOver(true);
	}
	const onDragLeave = (event: React.DragEvent) => {
		//console.log( "onDragLeave", event);
        setOver(false);
	}
	const onDragEnter = (event: React.DragEvent) => {
        setOver(true);
		//console.log( "onDragEnter", event);
	}
	const onDragExit = (event: React.DragEvent) => {
		//console.log( "onDragExit", event);
        setOver(false);
	}
	const onDrop = (event: React.DragEvent) => {
		event.preventDefault();
		event.stopPropagation();
        setOver(true);
        setIsLoading(true);

		// if file and inner image
		if(event.dataTransfer.files.length > 0) {
			const file = event.dataTransfer.files[0];
			setPrimaryColors(file);
		}
		else if(event.dataTransfer?.getData('URL')){
			const url = event.dataTransfer?.getData('URL');
			if(!url) return;
			fetch( url).then( data=> {
				return data.blob()
			}).then( blob => {
				setPrimaryColors(blob);
			});
		}
		else {
            setTimerMessage("Sorry, Unable to get color from your image :(");
		}
	}

    const mpImageClick = (path: string) => {
        setIsLoading(true);
        window.scrollTo(0, 0);
        fetch( path).then( data=> {
            return data.blob()
        }).then( blob => {
            setPrimaryColors(blob);
        });
    }
	return (
        <div className="main-wrapper">
            <div className={"loading " + (isLoading && message===""?"active": "")}>
                <div className="ring"></div>
            </div>
            <div className="main-container">
                <div className={"ddContainer " + (isover? "over ":"") + (message!==""? "message ":"") }
                    onDrop={onDrop} 
                    onDragEnter={onDragEnter} 
                    onDragExit={onDragExit} 
                    onDragLeave={onDragLeave}
                    onDragOver = {onDragOver}>
                    <input 
                        type="file" 
                        accept="image/png, image/gif, image/jpeg" 
                        onChange={onFileSelected}
                    />
                    <span>{message? message: "Drag & Drop your own masterpiece image"}</span>
                </div>
                <div className="library-wrapper">
                    {/* <h5>or select image from below</h5> */}
                    <div className="library-list">
                        { [...Array(44)].map((id, index) => {
                            return (
                                <div className="mp-continaer" key={index}>
                                    <MPImage path={'/images/' + (index+1) + '.jpg'} onClick={mpImageClick}/>
                                </div>
                            );
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
	