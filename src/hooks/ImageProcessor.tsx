// return [colos, state, message]
const getColors = (file: File | Blob) => {
    return new Promise<[Array<Array<string>>, string]>((resolve, reject) => {
        var reader  = new FileReader();
            reader.addEventListener("load", function () {
                if(!reader.result) {
                    reject( new Error("Something goes wrong while reading the image :("));
                    return;
                }
                if ((typeof (window as any).process) !== "function") {
                    reject( new Error("Image processer is unable to load on your browser :("));
                    return;
                }

                let result = (window as any).process(reader.result.toString());
                if (!result.state) {
                    reject( new Error(result.message));
                    return;
                }
                const colorsString = result.colors
                let colors = Array<Array<string>>();
                colorsString.split('|').forEach( (colorSet: string) => {
                    const tmpColor = colorSet.split(',').filter(color=>color !== "");
                    if (tmpColor.length >0) colors.push( tmpColor);
                })
                resolve([colors, reader.result.toString()]);

            }, false);
            reader.readAsDataURL(file);
    })
};

export default getColors;