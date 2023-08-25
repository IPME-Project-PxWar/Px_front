import { Component, OnInit, ViewChildren, QueryList, Input, HostListener } from '@angular/core';
/* import { Pixel } from '../pixel/pixel'; */
import { PixelFillDirective } from '../pixel/pixel-fill.directive';
import { PixelService } from '../pixel/pixel.service';

@Component({
    selector: 'pixel-grid',
    templateUrl: `./grid.component.html`,
    styleUrls: [`./grid.component.css`]
  })
  export class GridComponent implements OnInit {
    readonly PIXEL_SIZE = 20;
    width: number = 60;
    height: number = 40;
    createdAt: Date;
    pixelGrid: Array<Array<any>>;

    @ViewChildren(PixelFillDirective)
    pixelsRef: QueryList<PixelFillDirective>;

    constructor(
        private pixelService: PixelService
      ) { }

    ngOnInit(): void {
        this.pixelGrid = new Array(this.height);
        for(let i = 0; i < this.height; i++) {
            this.pixelGrid[i] = new Array(this.width).fill(0);
        }
    }

    clearPixels(){
        this.pixelsRef.forEach( pixel => {
          pixel.clearPixel();
        });
    }

    @HostListener('mouseleave')
    onMouseLeave(){
      this.pixelService.clicked = false;
    }

  }