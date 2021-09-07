import React from 'react'
import "./MPImage.scss"

interface MPImageProps {
    path: string;
    onClick: Function
  }

const MPImage: React.FC<MPImageProps> = (props) => {
    const onClick = () => {
        props.onClick(props.path);
    }
	return (
		<>
        <div onClick={onClick} className="mp-wrapper" draggable="true">
            <div className="imgContainer">
                <img src={props.path} alt={props.path} />
            </div>
        </div>
		</>
	  );
}
export default MPImage