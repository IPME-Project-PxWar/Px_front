 /* modèle pour le pixel */
 export class Pixel {
    id: number;
    x: number;
    y: number;
    color: Color;
    modifiedAt: Date;
    modifiedBy: string;
 }

 export class Color {
    red: number;
    green: number;
    blue: number;
}