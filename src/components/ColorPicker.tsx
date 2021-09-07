
import React, { useState } from 'react'
import { SketchPicker } from 'react-color'

interface ColorPickerProps {
    color: string;
    onChange: Function;
    id: string
}

const ColorPicker: React.FC<ColorPickerProps>  = (props) => {
    const [displayPicker, setDisplayPicker] = useState(false);
    const color = props.color;

    const handleClick = () => {
        setDisplayPicker(!displayPicker)
    };
    const handleChange = (color: any) => {
        props.onChange(color, props.id);
    };
    const handleClose = () => {
        setDisplayPicker(false)
    };

    const styles = {
        "wrapper" : {
            display: "inline-block",
            width: "70px"
        },
        "color": {
            width: "100%",
            height: "14px",
            borderRadius: "2px",
            background: color,
        },
        "swatch": {
            width: "100%",
            background: "#fff",
            borderRadius: "1px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
            display: "inline-block",
            cursor: "pointer",
        },
        "popover": {
            position: "absolute" as const,
            zIndex: 2,
            right: "150px",
        },
        "cover": {
            top: "0px" as const,
            right: "0px" as const,
            bottom: "0px" as const,
            left: "0px" as const,
            position: "fixed" as const,
        },
    };

    return (
        <div style={styles.wrapper}>
        <div style={ styles.swatch } onClick={ handleClick }>
            <div style={ styles.color } />
        </div>
        { displayPicker? <div style={ styles.popover } >
            <div style={ styles.cover } onClick={ handleClose } />
            <SketchPicker color={ color } onChange={ handleChange } />
        </div> : null }

        </div>
    )
}


export default ColorPicker