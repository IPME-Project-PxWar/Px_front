import { Injectable } from '@angular/core';
import { Pixel } from './pixel';
import { Color } from '../color-scheme/Color';

@Injectable({providedIn: 'root'})

export class PixelService {

    private _clicked = false;
    currentColor : Color = { red:200,green:200,blue:200};

    constructor() { }

    get clicked() {
        return this._clicked;
    }

    set clicked(value: boolean) {
        this._clicked = value
    }

    get color():Color {
        return this.currentColor;
    }
    set color(color: Color) {
        this.currentColor = color;
    }
}