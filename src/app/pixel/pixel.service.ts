import { Injectable } from '@angular/core';
import { Pixel } from '../pixel/pixel';
import { Color } from '../color-scheme/color-scheme';

@Injectable({providedIn: 'root'})

export class PixelService {

    private _clicked = false;
    currentColor : Color = { red:200,green:0,blue:0};

    constructor() { }

    get clicked(){
        return this._clicked;
    }

    set clicked(value: boolean){
        this._clicked = value
    }
}