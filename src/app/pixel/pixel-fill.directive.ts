import { Directive, HostListener, ElementRef } from '@angular/core';
import { PixelService } from './pixel.service';

@Directive({ selector: '[pixelFill]' })

export class PixelFillDirective {

    constructor(
        private _elementRef: ElementRef,
        private _pixelService: PixelService
    ) { }

    @HostListener('mouseenter') onHover(){
       /* if(this._pixelService.clicked){
            this._elementRef.nativeElement.style['background-color'] = `rgba( ${this._pixelService.currentColor.red}, ${this._pixelService.currentColor.green}, ${this._pixelService.currentColor.blue}, 0.75)`;
        }*/
    }
    
    @HostListener('mousedown') onMouseDown(){
        this._pixelService.clicked = true;
    }

    @HostListener('mouseup') onMouseUp(){
        /* @TODO remplacer par l'affichage de la palette pour la sélection et validation du changement de couleur du pixel */
        this._elementRef.nativeElement.style['background-color'] = `rgba( ${this._pixelService.currentColor.red}, ${this._pixelService.currentColor.green}, ${this._pixelService.currentColor.blue}, 1)`;
        this._pixelService.clicked = false;
    }

    clearPixel(){
        this._elementRef.nativeElement.style['background-color'] = `rgba( 255, 255, 255, 1)`;
        console.log('clearPixel');
    }

}