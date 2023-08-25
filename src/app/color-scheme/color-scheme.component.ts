import { Component, OnInit } from '@angular/core';
import { COLORSCHEME } from '../../assets/mocks/mock-color-scheme';
import { Color } from './Color'
import { PixelService } from '../pixel/pixel.service';

@Component({
    selector: 'color-scheme',
    templateUrl: `./color-scheme.component.html`,
    styleUrls: [`./color-scheme.component.css`]
  })
export class ColorScheme implements OnInit {
    readonly COLOR_BOX_SIZE = 30;
    colors: Color[];
    selectedColor: Color | undefined;

    constructor(
        private pixelService: PixelService
    ) { }

    ngOnInit(): void {
        this.colors = COLORSCHEME;
    }

    selectColor( color: Color ) {
        this.pixelService.currentColor = color;
        this.selectedColor = color;
        console.log( `color: rgb( ${color.red},${color.green},${color.blue}) is selected !` )
    }

    rgb( r: number, g: number, b: number ):string {
        return `rgb(${r}, ${g}, ${b})`;
    }

}
