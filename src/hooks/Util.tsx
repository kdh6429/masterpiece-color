import { previewSetType, ImageInfoType } from "../model/types"

function getArrayMutations(arr: Array<string>, perms = Array<Array<string>>(), len = arr.length) {
    let tmpArr = [...arr];
    if (len === 1) perms.push(tmpArr.slice(0))
  
    for (let i = 0; i < len; i++) {
      getArrayMutations(tmpArr, perms, len - 1)
  
      len % 2 // parity dependent adjacent elements swap
        ? [tmpArr[0], tmpArr[len - 1]] = [tmpArr[len - 1], tmpArr[0]]
        : [tmpArr[i], tmpArr[len - 1]] = [tmpArr[len - 1], tmpArr[i]]
    }
  
    return perms
  }

export const genPreviewsFromImageInfo = (imageInfo: ImageInfoType): Array<previewSetType> => {
    let previewSets = Array<previewSetType>();

    let tmpColorsSet = Array<Array<string>>();
    // 다양한 컨셉으로 추가
    [...imageInfo.colors].forEach( colors => {
        if (!colors || colors.length===0) return;
        const permutationSets = getArrayMutations(colors);
        tmpColorsSet.unshift(permutationSets[0])
        tmpColorsSet = tmpColorsSet.concat(permutationSets.slice(1))
    });
    
    tmpColorsSet.forEach( colors => {
        let mColor = (() => {
            return colors[0];
        })();
        let mColorLighter = _getLighterColor(mColor);
        let mColorDarker = _getDarkerColor(mColor);

        let sColor = (() => {
            if (colors.length >= 2) return colors[1];
            return '#FFFFFF';
        })();
        let sColorLighter = _getLighterColor(sColor);
        let sColorDarker = _getDarkerColor(sColor);

        let mTextColor = (() => {
            if (colors.length >= 3) return colors[2];

            const whiteContrast = getContrastRatio("#FFFFFF", mColor);
            const blackContrast = getContrastRatio("#000000", mColor);
            if (whiteContrast > blackContrast) return "#FFFFFF"

            return '#000000';
        })();
        let sTextColor = (() => {
            if (colors.length >= 4) return colors[3];

            const whiteContrast = getContrastRatio("#FFFFFF", sColor);
            const blackContrast = getContrastRatio("#000000", sColor);
            if (whiteContrast > blackContrast) return "#FFFFFF"

            return '#000000';
        })();
        const preivewSet: previewSetType = {
            mColor,
            mColorLighter,
            mColorDarker,
            sColor,
            sColorLighter,
            sColorDarker,
            mTextColor,
            sTextColor,
        };
        previewSets.push(preivewSet);
    })
    return previewSets;
}

const _getLighterColor = (color: string): string => {
    return  _colorLuminance(color, 0.3)
}
const _getDarkerColor = (color: string): string => {
    return  _colorLuminance(color, -0.3)
}

// _colorLuminance("6699CC", 0.2);	// "#7ab8f5" - 20% lighter
// _colorLuminance("69C", -0.5);	// "#334d66" - 50% darker
function _colorLuminance(hex: string, lum: number) {
	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

function luminance(color: string) {

    var r = (255 - parseInt(color.slice(0, 2), 16)),
        g = (255 - parseInt(color.slice(2, 4), 16)),
        b = (255 - parseInt(color.slice(4, 6), 16));

    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow( (v + 0.055) / 1.055, 2.4 );
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export const getContrastRatio = (color1:string, color2: string): number => {
    var lum1 = luminance(color1.slice(1));
    var lum2 = luminance(color2.slice(1));

    var brightest = Math.max(lum1, lum2);
    var darkest = Math.min(lum1, lum2);
    return (brightest + 0.05)
            / (darkest + 0.05);
}