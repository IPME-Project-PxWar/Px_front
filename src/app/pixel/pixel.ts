import { Color } from '../color-scheme/color-scheme'

 /* modèle pour le pixel */
export class Pixel {
   id: number;
   x: number;
   y: number;
   color: Color;
   modifiedAt: Date;
   modifiedBy: string;
}

