
export interface ImageInfoType {
    colors: Array<Array<string>>
    img: string
}

export interface previewSetType {
    mColor: string
    mColorLighter: string
    mColorDarker: string
    sColor: string
    sColorLighter: string
    sColorDarker: string
    mTextColor: string
    sTextColor: string
}

export interface SVGImportorProps {
    colorSet: previewSetType;
}