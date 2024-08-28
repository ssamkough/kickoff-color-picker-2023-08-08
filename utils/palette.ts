import { Color } from "../pages/types";

export const SAMPLE_RGB_STRING_ARRAY = [
  { ...colorFromRgbString("23-45-66") },
  { ...colorFromRgbString("66-45-23") },
  { ...colorFromRgbString("123-88-233") },
  { ...colorFromRgbString("241-163-198") },
  { ...colorFromRgbString("12-120-210") },
];

/**
 * Transforms `Color` object to an RGB string to send to db.
 * @param color `Color`
 * @return `[red]-[green]-[blue]`
 */
export function rgbStringFromColor(color: Color): string {
  if (!color) return;
  return `${color.red}-${color.green}-${color.blue}`;
}

/**
 * Transforms RGB string to `Color` object
 * @param colorString `[red]-[green]-[blue]`
 * @return `Color`
 *    {
 *      red: number;
 *      green: number;
 *      blue: number;
 *    }
 */
export function colorFromRgbString(colorString: string): Color {
  if (!colorString) return;
  const colorStringArr = colorString.split("-");
  return {
    red: Number(colorStringArr[0]),
    green: Number(colorStringArr[1]),
    blue: Number(colorStringArr[2]),
  };
}
