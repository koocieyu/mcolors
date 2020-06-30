import colors from "./colors"


type hexString = string;
export function checkMaterial(color: hexString): boolean | void {
    let colorSearched = color.toUpperCase();
    if (colorSearched.startsWith("#")) colorSearched = colorSearched.substring(1);
    if (colorSearched.length != 6) return false;

    let found = false;
    Object.values(colors).forEach(variantArray => {
        if (variantArray.includes(colorSearched)) found = true;
    })
    
    if (found) return true;
    return false;
}