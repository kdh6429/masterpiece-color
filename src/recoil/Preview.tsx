import { atom } from 'recoil'
import { ImageInfoType, previewSetType } from "../model/types"

export const imageInfoState = atom<ImageInfoType>({
  key: 'imageInfoState',
  default: {
    colors : Array<Array<string>>(),
    img: ""
  }
});

export const previewSetState = atom<previewSetType>({
  key: 'previewSetState',
  default: {} as previewSetType
});

