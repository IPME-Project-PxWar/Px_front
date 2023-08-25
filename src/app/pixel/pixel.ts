import { Color } from '../color-scheme/Color'

 /* modèle pour le pixel */
export class Pixel {
   id: number;
   x: number;
   y: number;
   color: Color;
   modifiedAt: Date;
   modifiedBy: string;
}

